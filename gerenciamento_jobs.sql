-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 18-Abr-2019 às 20:35
-- Versão do servidor: 10.1.37-MariaDB
-- versão do PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gerenciamento_jobs`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cpf_cnpj` varchar(255) DEFAULT NULL,
  `chave` varchar(255) NOT NULL,
  `caminho_logo` varchar(255) DEFAULT NULL,
  `ativo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `nome`, `cpf_cnpj`, `chave`, `caminho_logo`, `ativo`) VALUES
(1, 'EM Designer', '30.975.662/0001-48', '12345', NULL, 1),
(2, 'ANTONIO EDUARDO MOREIRA', '424.987.978-08', '12345', NULL, 1),
(3, 'ANTONIO EDUARDO MOREIRA', '424.987.978-08', '54321', NULL, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `projeto`
--

CREATE TABLE `projeto` (
  `id_projeto` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `id_cliente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `projeto`
--

INSERT INTO `projeto` (`id_projeto`, `nome`, `status`, `id_cliente`) VALUES
(1, 'Teste', 50, 1),
(2, 'Projeto 2', 50, 1),
(3, 'Teste 3', 50, 1),
(4, 'TEste 4', 50, 1),
(5, 'TEste   4', 50, 1),
(6, 'dsadsa', 50, 1),
(7, 'dsadsada', 50, 1),
(8, 'dsadada', 50, 1),
(9, 'dsadsada', 50, 1),
(10, 'dsadssadsa', 50, 1),
(11, 'dsada', 50, 1),
(12, 'dsadqrqsd', 50, 1),
(13, 'qqqqqqqqqqq', 50, 1),
(14, 'srqdsqeqdq', 50, 1),
(15, 'sdqdqweqdsq', 50, 1),
(16, '1555555555', 50, 1),
(17, 'sdqsdqeqd', 50, 1),
(18, 'dsqeqdqedqdsq', 50, 1),
(19, 'qqqqqqqqqq', 50, 1),
(20, 'qqqqqqqqqqqqqq', 50, 1),
(21, 'dsqrfqdfsq', 50, 1),
(22, 'Smart COntrol', 50, 1),
(23, 'Projeto Teste', 1, 1),
(24, 'dsadsa', 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `servico`
--

CREATE TABLE `servico` (
  `id_servico` int(11) NOT NULL,
  `id_projeto` int(11) DEFAULT NULL,
  `data_solicitacao` datetime DEFAULT CURRENT_TIMESTAMP,
  `data_termino` datetime DEFAULT NULL,
  `observacao` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  `id_responsavel` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `servico`
--

INSERT INTO `servico` (`id_servico`, `id_projeto`, `data_solicitacao`, `data_termino`, `observacao`, `status`, `id_responsavel`) VALUES
(1, 23, '2019-04-12 00:05:14', NULL, 'teste servico\r\n', 1, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL,
  `aprovado` int(11) DEFAULT NULL,
  `id_cliente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nome`, `email`, `senha`, `tipo`, `aprovado`, `id_cliente`) VALUES
(1, 'Eduardo Moreira', 'contato@eduardoem.com.br', '4badaee57fed5610012a296273158f5f', 3, 1, NULL),
(2, 'Eduardo Moreira', 'contato@eduardoem.com.br', '4badaee57fed5610012a296273158f5f', 3, 1, NULL),
(3, 'Eduardo Moreira', 'contato@eduardoem.com.br', '4badaee57fed5610012a296273158f5f', 3, 1, 1),
(4, 'Eduardo Moreira 2', 'dev.eduardomoreira1506@gmail.com', '4badaee57fed5610012a296273158f5f', 3, 1, 3),
(5, 'Eduardo Moreira 2', 'emdesigneroficial@gmail.com', '4badaee57fed5610012a296273158f5f', 3, 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indexes for table `projeto`
--
ALTER TABLE `projeto`
  ADD PRIMARY KEY (`id_projeto`),
  ADD KEY `id_cliente` (`id_cliente`);

--
-- Indexes for table `servico`
--
ALTER TABLE `servico`
  ADD PRIMARY KEY (`id_servico`),
  ADD KEY `id_projeto` (`id_projeto`),
  ADD KEY `id_responsavel` (`id_responsavel`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `id_cliente` (`id_cliente`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `projeto`
--
ALTER TABLE `projeto`
  MODIFY `id_projeto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `servico`
--
ALTER TABLE `servico`
  MODIFY `id_servico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `projeto`
--
ALTER TABLE `projeto`
  ADD CONSTRAINT `projeto_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`);

--
-- Limitadores para a tabela `servico`
--
ALTER TABLE `servico`
  ADD CONSTRAINT `servico_ibfk_1` FOREIGN KEY (`id_projeto`) REFERENCES `projeto` (`id_projeto`),
  ADD CONSTRAINT `servico_ibfk_2` FOREIGN KEY (`id_responsavel`) REFERENCES `usuario` (`id_usuario`);

--
-- Limitadores para a tabela `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
