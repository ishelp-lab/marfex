/*
  # Criar tabela de materiais

  1. Nova Tabela
    - `materials`
      - `id` (uuid, chave primária)
      - `name` (text) - Nome do material
      - `category` (text) - Categoria (Mármore, Granito, Quartzo, etc)
      - `description` (text) - Descrição do material
      - `image_url` (text) - URL da imagem
      - `color` (text) - Cor predominante
      - `finish` (text) - Acabamento (Polido, Levigado, etc)
      - `application` (text) - Aplicação (Cozinha, Banheiro, Piso, etc)
      - `available` (boolean) - Disponibilidade
      - `created_at` (timestamp)

  2. Segurança
    - Habilitar RLS na tabela `materials`
    - Adicionar política para leitura pública dos materiais
*/

CREATE TABLE IF NOT EXISTS materials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  description text DEFAULT '',
  image_url text DEFAULT '',
  color text DEFAULT '',
  finish text DEFAULT 'Polido',
  application text DEFAULT '',
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE materials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Materiais são visíveis publicamente"
  ON materials
  FOR SELECT
  TO anon, authenticated
  USING (true);