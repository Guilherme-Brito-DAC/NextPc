-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 11-Nov-2021 às 12:46
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `nextgearapi`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `armazenamento`
--

DROP TABLE IF EXISTS `armazenamento`;
CREATE TABLE IF NOT EXISTS `armazenamento` (
  `id` int(250) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `preco` float NOT NULL,
  `imagem` varchar(250) NOT NULL,
  `capacidade` int(250) NOT NULL,
  `tipo` enum('ssd','hd') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `fonte`
--

DROP TABLE IF EXISTS `fonte`;
CREATE TABLE IF NOT EXISTS `fonte` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `eficiencia` int(250) NOT NULL,
  `voltagem` int(250) NOT NULL,
  `modular` tinyint(1) NOT NULL,
  `imagem` varchar(250) NOT NULL,
  `preco` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pc`
--

DROP TABLE IF EXISTS `pc`;
CREATE TABLE IF NOT EXISTS `pc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `imagem` varchar(250) NOT NULL,
  `cpu_id` int(11) NOT NULL,
  `placamae_id` int(11) NOT NULL,
  `ram_id` int(11) NOT NULL,
  `armazenamento_id` int(11) NOT NULL,
  `placadevideo_id` int(11) NOT NULL,
  `fonte_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `placa_mae`
--

DROP TABLE IF EXISTS `placa_mae`;
CREATE TABLE IF NOT EXISTS `placa_mae` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `marca` varchar(250) NOT NULL,
  `slots` varchar(250) NOT NULL,
  `slots_pci` varchar(250) NOT NULL,
  `soquete` varchar(250) NOT NULL,
  `ddr` int(11) NOT NULL,
  `imagem` varchar(250) NOT NULL,
  `preco` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `placa_video`
--

DROP TABLE IF EXISTS `placa_video`;
CREATE TABLE IF NOT EXISTS `placa_video` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `chipset` varchar(250) NOT NULL,
  `memoria` varchar(10) NOT NULL,
  `core_clock` varchar(100) NOT NULL,
  `imagem` varchar(250) NOT NULL,
  `preco` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `processador`
--

DROP TABLE IF EXISTS `processador`;
CREATE TABLE IF NOT EXISTS `processador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` int(11) NOT NULL,
  `marca` int(11) NOT NULL,
  `cache` int(11) NOT NULL,
  `soquete` int(11) NOT NULL,
  `nucleos` int(11) NOT NULL,
  `threads` int(11) NOT NULL,
  `clock_basico` int(11) NOT NULL,
  `imagem` varchar(250) NOT NULL,
  `preco` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ram`
--

DROP TABLE IF EXISTS `ram`;
CREATE TABLE IF NOT EXISTS `ram` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `marca` varchar(250) NOT NULL,
  `velocidade` varchar(250) NOT NULL,
  `ddr` int(11) NOT NULL,
  `imagem` varchar(250) NOT NULL,
  `preco` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `sobrenome` varchar(50) DEFAULT NULL,
  `usuario` varchar(50) NOT NULL,
  `senha` varchar(250) NOT NULL,
  `data_de_cadastro` date NOT NULL,
  `email` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
