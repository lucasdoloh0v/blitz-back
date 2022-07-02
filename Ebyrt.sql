DROP SCHEMA IF EXISTS Ebyrt;
CREATE SCHEMA IF NOT EXISTS Ebyrt;

CREATE TABLE Ebyrt.Tasks (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL
);

INSERT INTO
  Ebyrt.Tasks (name, status, created_at)
VALUES
  ('Escrever um resumo', 'pendente', '2022-07-02 07:05:00');

INSERT INTO
  Ebyrt.Tasks (name, status, created_at)
VALUES
  ('Assinar contrato', 'em andamento', '2022-06-10 11:00:00');

INSERT INTO
  Ebyrt.Tasks (name, status, created_at)
VALUES
  ('Reunião de admissão', 'em andamento', '2022-06-11 15:00:00');

INSERT INTO
  Ebyrt.Tasks (name, status, created_at)
VALUES
  ('Reunião de admissão', 'pronto', '2022-06-01 16:00:00');