# 🚨 Sistema de Alertas de Estoque Baixo

## Visão Geral

O aplicativo agora possui um sistema completo de alertas para produtos com estoque baixo. Isso ajuda você a manter o inventário sempre atualizado e evitar falta de produtos essenciais.

## Features Implementadas

### 1. **Campo de Quantidade Mínima** 📊
- **Onde:** Formulário de novo item / edição
- **Como funciona:** Quando você adiciona ou edita um produto, pode definir a quantidade mínima desejada
- **Padrão:** 10 unidades (você pode alterar)
- **Benefício:** Cada produto tem seu próprio limite de alerta

### 2. **Indicadores Visuais nos Cards** 🎨
Os cards dos produtos agora mostram:

| Condição | Ícone | Cor | Descrição |
|----------|-------|-----|-----------|
| Estoque OK | ✅ | Verde | Quantidade acima do mínimo |
| Estoque Baixo | 🚨 | Vermelho | Quantidade igual ou abaixo do mínimo |

**Estilo Visual:**
- Card com fundo levemente avermelhado quando em alerta
- Borda esquerda em vermelho (#e74c3c)
- Banner de aviso dentro do card

### 3. **Banner de Alerta** ⚠️
Quando um produto está com estoque baixo, aparece um banner amarelo dentro do card mostrando:
- Ícone de alerta (⚠️)
- Mensagem: "Estoque Baixo!"
- Quantidade mínima configurada

Exemplo:
```
⚠️ Estoque Baixo! Mínimo: 10 kg
```

### 4. **Filtro de Produtos com Estoque Baixo** 🔍
- **Botão:** "🚨 Estoque Baixo (n)" na barra de ferramentas
- **Funcionalidade:** Clique para ver APENAS produtos com estoque crítico
- **Badge:** Mostra a quantidade de produtos em alerta
- **Ativo:** Botão fica destacado em azul

## Como Usar

### Adicionando um Novo Produto com Alerta

1. Clique em **"➕ Novo Item"**
2. Preencha os dados normalmente
3. **No campo "Quantidade Mínima"**, defina o valor desejado (ex: 10 kg)
4. Clique em **"➕ Adicionar"**

### Editando Quantidade Mínima

1. Clique em **"✏️ Editar"** no card do produto
2. Altere o campo **"Quantidade Mínima"**
3. Clique em **"💾 Atualizar"**

### Filtrando Produtos Baixos

1. Na barra de ferramentas, clique em **"🚨 Estoque Baixo"**
2. Apenas produtos com estoque crítico serão exibidos
3. Clique novamente para remover o filtro

## Exemplo Prático

**Cenário:** Você tem Café com:
- Quantidade atual: 5 kg
- Quantidade mínima: 10 kg

**O que acontece:**
- ✅ O card mostra ícone 🚨 ao lado do nome
- ✅ Card tem fundo levemente avermelhado
- ✅ Borda esquerda em vermelho
- ✅ Banner amarelo aparece: "⚠️ Estoque Baixo! Mínimo: 10 kg"
- ✅ Ao clicar no filtro, este item fica visível

Quando você atualiza a quantidade para 15 kg:
- ✅ Ícone muda para ✅
- ✅ Card volta ao normal
- ✅ Banner desaparece

## Combinando Busca e Filtro

Você pode usar a busca E o filtro juntos:

1. Digite um nome na busca (ex: "Café")
2. Clique no filtro de estoque baixo
3. **Resultado:** Apenas Café com estoque baixo aparece

## Estrutura do Banco de Dados

Nova coluna adicionada à tabela `items`:
```sql
min_quantity REAL DEFAULT 10
```

- **Tipo:** Número decimal (REAL)
- **Padrão:** 10 unidades
- **Histórico:** Produtos criados antes da atualização herdam o padrão

## Componentes Afetados

### Backend (`server/`)
- `routes/items.js` - POST e PUT agora aceitam `min_quantity`
- `db/database.js` - Tabela atualizada com novo campo

### Frontend (`src/`)

**Componentes:**
- `components/ItemForm.jsx` - Novo input para quantidade mínima
- `components/ItemList.jsx` - Lógica de alerta e styling
- `pages/Inventory.jsx` - Novo filtro e estado

**Estilos:**
- `styles/ItemList.css` - Novas classes: `.alert-low-stock`, `.alert-banner`
- `styles/Inventory.css` - Layout dos botões na toolbar

## Dicas Importantes

### 🎯 Melhores Práticas
1. **Defina limites realistas** - Use o consumo médio como base
2. **Atualize conforme necessário** - Altere a quantidade mínima semestralmente
3. **Revise regularmente** - Use o filtro de estoque baixo diariamente

### 🔧 Troubleshooting

**Pergunta:** Atualizei a quantidade mínima, mas o alerta não desapareceu
**Resposta:** Você precisa atualizar também a quantidade atual do produto

**Pergunta:** Todos meus produtos aparecem com alerta
**Resposta:** Verifique se as quantidades estão corretas e as mínimas são realistas

## Versão

- **Versão:** 2.0.0 (Com Sistema de Alertas)
- **Data:** Novembro de 2025
- **Compatibilidade:** Node.js 14+, React 19.2.0

---

💡 **Dica:** Use os alertas em conjunto com relatórios de vendas para melhorar sua gestão de estoque!
