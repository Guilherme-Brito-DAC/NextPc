-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 11-Nov-2021 às 20:21
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
-- Banco de dados: `nextgear`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `armazenamento`
--

DROP TABLE IF EXISTS `armazenamento`;
CREATE TABLE IF NOT EXISTS `armazenamento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `imagem` text NOT NULL,
  `preco` float DEFAULT NULL,
  `capacidade` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cpu`
--

DROP TABLE IF EXISTS `cpu`;
CREATE TABLE IF NOT EXISTS `cpu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `imagem` text NOT NULL,
  `preco` float DEFAULT NULL,
  `clock` varchar(250) DEFAULT NULL,
  `boost` varchar(250) DEFAULT NULL,
  `tdp` varchar(250) DEFAULT NULL,
  `gpu` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `fonte`
--

DROP TABLE IF EXISTS `fonte`;
CREATE TABLE IF NOT EXISTS `fonte` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `imagem` text NOT NULL,
  `preco` float DEFAULT NULL,
  `eficiencia` varchar(250) DEFAULT NULL,
  `voltagem` varchar(250) DEFAULT NULL,
  `modular` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `gpu`
--

DROP TABLE IF EXISTS `gpu`;
CREATE TABLE IF NOT EXISTS `gpu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `imagem` text NOT NULL,
  `preco` float DEFAULT NULL,
  `chipset` varchar(250) DEFAULT NULL,
  `memoria` varchar(250) DEFAULT NULL,
  `coreClock` varchar(250) DEFAULT NULL,
  `boostClock` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pc`
--

DROP TABLE IF EXISTS `pc`;
CREATE TABLE IF NOT EXISTS `pc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `imagem` text NOT NULL,
  `armazenamento_id` int(11) NOT NULL,
  `cpu_id` int(11) NOT NULL,
  `gpu_id` int(11) NOT NULL,
  `fonte_id` int(11) NOT NULL,
  `placa_mae_id` int(11) NOT NULL,
  `ram_id` int(11) NOT NULL,
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
  `imagem` text NOT NULL,
  `preco` float DEFAULT NULL,
  `formato` varchar(250) DEFAULT NULL,
  `maxMemoria` varchar(250) DEFAULT NULL,
  `espacosDeMemoria` varchar(250) DEFAULT NULL,
  `soquete` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ram`
--

DROP TABLE IF EXISTS `ram`;
CREATE TABLE IF NOT EXISTS `ram` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `imagem` text NOT NULL,
  `preco` float DEFAULT NULL,
  `velocidade` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `sobrenome` varchar(250) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `imagem` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `senha` varchar(250) NOT NULL,
  `modoNoturno` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario` (`usuario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
