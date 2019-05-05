-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 05-Maio-2019 às 20:46
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
  `ativo` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `nome`, `cpf_cnpj`, `chave`, `caminho_logo`, `ativo`) VALUES
(1, 'EM Designer', '30.975.662/0001-48', '12345', NULL, 50),
(2, 'ANTONIO EDUARDO MOREIRA', '424.987.978-08', '12345', NULL, 50),
(3, 'ANTONIO EDUARDO MOREIRA', '424.987.978-08', '54321', NULL, 50),
(4, 'testeee', '13456', 'dsasdada', NULL, 50),
(5, 'Testeee criandoooo', '123456789', 'dsadqsrqsq', NULL, 50),
(6, 'Transmeet', '123456789', '8090', NULL, 50),
(7, 'Transmeet M2M', '1245567897', 'transmeet_2019', NULL, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `notificacoes`
--

CREATE TABLE `notificacoes` (
  `id_notificacao` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `visualizada` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `notificacoes`
--

INSERT INTO `notificacoes` (`id_notificacao`, `id_cliente`, `visualizada`) VALUES
(1, 7, 1),
(2, 7, 1),
(3, 7, 1),
(4, 7, 1),
(5, 7, 1);

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
(23, 'Projeto Teste', 0, 1),
(24, 'dsadsa', 50, 1),
(25, 'Novo projeto', 50, 1),
(26, 'Novo projeto 2', 50, 1),
(27, 'Smart Control', 1, 6),
(28, 'Smart Control', 1, 7);

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
(4, 23, '2019-04-26 21:24:11', '2019-04-27 00:51:27', 'aaaaaa<br/><br/><br/><br />Arruma direito caraaa<br />Arruma direito caraaa', 0, 6),
(5, 23, '2019-04-26 21:27:48', '2019-04-26 21:32:24', 'fdsdfsda', 0, 6),
(6, 24, '2019-04-26 23:16:16', '2019-04-26 23:16:35', 'dsadsadsa', 0, 6),
(7, 24, '2019-04-26 23:16:58', '2019-04-26 23:20:33', 'qqqqqqqqq', 0, 6),
(8, 24, '2019-04-26 23:21:10', '2019-04-27 00:44:59', 'dsadsa<br />Não gostei não', 0, 6),
(9, 23, '2019-04-27 00:51:31', '2019-04-27 12:41:21', 'dsadadsa', 0, 6),
(10, 23, '2019-04-27 00:51:47', '2019-04-27 12:41:20', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq<br />Arruma direito caraaadfadsadadas', 0, 6),
(11, 24, '2019-04-27 15:35:44', '2019-04-27 15:37:39', 'novo gerado pelo cliente<br />qqqqqqqqqqq', 0, 6),
(12, 24, '2019-04-28 19:18:28', '2019-05-01 21:40:21', 'aaaaaaaaa', 0, 6),
(13, 23, '2019-05-01 21:18:53', NULL, 'dsadsa', 1, NULL),
(14, 24, '2019-05-01 21:50:09', NULL, 'Novo serviço!', 1, NULL),
(15, 27, '2019-05-01 22:37:49', '2019-05-01 22:38:17', 'Precisamos corrigir bugs aqui!<br />Po cara, arruma direito ai!', 0, 6),
(16, 28, '2019-05-01 22:51:34', '2019-05-01 22:53:11', 'Página está com qdnasodnaodsnao<br />Foi reprovado pdosamdamnodanmo', 0, 6),
(17, 28, '2019-05-03 16:42:17', '2019-05-03 16:43:01', 'Não está funcionandoooo', 0, 6),
(18, 28, '2019-05-03 16:48:39', NULL, 'qqq<br />dsa', 1, NULL),
(19, 28, '2019-05-04 18:31:50', NULL, 'Por favor arruma ai mano!!!!<br />ta tudo errado!!!', 1, 6),
(20, 28, '2019-05-04 18:35:34', '2019-05-04 18:36:53', 'dsadsa<br />dsqdqdqdqdq', 0, 6),
(21, 28, '2019-05-05 13:03:42', '2019-05-05 14:57:46', 'dsaaaaaaaaaaaaaaaa', 0, 6),
(22, 28, '2019-05-05 13:06:22', '2019-05-05 15:06:56', 'dsadsadsasddsa<br />dsadsadsa<br />dsa<br />dsadsadsa<br />dsadadadsa<br />dsadsadsa<br />iibvibi<br />hiklbiubo<br />çklnib<br />dsadsad<br />dqdsqrqsfdq<br />dsqdqdsq<br />sdqsdq qf qs<br />fq fqr qs<br />fq sqr qdfq<br />dsq dqdq<br />fasd fa<br />fqs ', 0, 6);

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
(3, 'Eduardo Moreira', 'contato@eduardoem.com.br', '4badaee57fed5610012a296273158f5f', 3, 50, 1),
(4, 'Eduardo Moreira 2', 'dev.eduardomoreira1506@gmail.com', '4badaee57fed5610012a296273158f5f', 3, 50, 3),
(6, 'Eduardo', 'eduardo@onlysat.com', '4badaee57fed5610012a296273158f5f', 1, 1, NULL),
(7, 'Eduardo', 'teste@teste.com.br', '4badaee57fed5610012a296273158f5f', 3, 50, 1),
(8, 'Edu cliente gerencia', 'edu@gerencia.com', '4badaee57fed5610012a296273158f5f', 3, 50, 1),
(9, 'dsada', 'dasdsa', '4badaee57fed5610012a296273158f5f', 3, 50, 1),
(10, 'dsadsadsa', 'dsadsadsadsa', '4badaee57fed5610012a296273158f5f', 3, 50, 1),
(11, 'oficial', 'oficial@edu', '4badaee57fed5610012a296273158f5f', 3, 50, 1),
(12, 'edu faz nada', 'edu@edu.com', '4badaee57fed5610012a296273158f5f', 2, 50, 1),
(13, 'Bruno', 'bc@caldas.com', '4badaee57fed5610012a296273158f5f', 1, 50, NULL),
(14, 'Marcio', 'marcio@teste.com', '4badaee57fed5610012a296273158f5f', 1, 50, NULL),
(15, 'Neto', 'neto@neto.com', '4badaee57fed5610012a296273158f5f', 3, 50, 6),
(16, 'testeeee', 'teste@teste.com', '4badaee57fed5610012a296273158f5f', 2, 50, 6),
(17, 'Usuário ', 'usuario@edu.com', '4badaee57fed5610012a296273158f5f', 2, 1, 6),
(18, 'Bruno Caldas', 'bruno@caldas.com', '4badaee57fed5610012a296273158f5f', 1, 1, NULL),
(19, 'Neto Fogaça', 'neto@neto.com.br', '4badaee57fed5610012a296273158f5f', 3, 1, 7),
(20, 'Priscila', 'priscila@priscila.com', '4badaee57fed5610012a296273158f5f', 2, 1, 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indexes for table `notificacoes`
--
ALTER TABLE `notificacoes`
  ADD PRIMARY KEY (`id_notificacao`),
  ADD KEY `id_cliente` (`id_cliente`);

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
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `notificacoes`
--
ALTER TABLE `notificacoes`
  MODIFY `id_notificacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `projeto`
--
ALTER TABLE `projeto`
  MODIFY `id_projeto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `servico`
--
ALTER TABLE `servico`
  MODIFY `id_servico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `notificacoes`
--
ALTER TABLE `notificacoes`
  ADD CONSTRAINT `notificacoes_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`);

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
