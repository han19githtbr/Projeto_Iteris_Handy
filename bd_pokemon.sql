-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16-Ago-2022 às 21:50
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_pokemon`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `result`
--

CREATE TABLE `result` (
  `id` int(11) NOT NULL,
  `pokemon1` varchar(50) NOT NULL,
  `pokemon2` varchar(50) NOT NULL,
  `result` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `result`
--

INSERT INTO `result` (`id`, `pokemon1`, `pokemon2`, `result`) VALUES
(126, 'Caterpie', 'Jirachi', 'Caterpie'),
(127, 'Weedle', 'Whimsicott', 'Whimsicott');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_pokemon`
--

CREATE TABLE `tb_pokemon` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `hp` int(11) NOT NULL,
  `attack` int(11) NOT NULL,
  `defense` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `special_attack` int(11) NOT NULL,
  `special_defense` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_pokemon`
--

INSERT INTO `tb_pokemon` (`id`, `name`, `hp`, `attack`, `defense`, `speed`, `special_attack`, `special_defense`) VALUES
(9, 'Bulbasaur', 42, 41, 54, 45, 45, 74),
(10, 'Ivysaur', 75, 75, 88, 54, 58, 87),
(11, 'Squirtle', 54, 85, 44, 55, 44, 88),
(12, 'Caterpie', 85, 45, 45, 44, 55, 44),
(13, 'Weedle', 54, 56, 44, 85, 44, 110),
(14, 'Pidgey', 41, 45, 44, 44, 54, 78),
(15, 'Combee', 96, 54, 54, 55, 85, 45),
(16, 'Jirachi', 42, 45, 45, 45, 75, 65),
(17, 'Whimsicott', 42, 77, 85, 85, 85, 45),
(18, 'Litwick', 42, 82, 55, 44, 41, 85),
(19, 'Wooper', 85, 54, 54, 54, 22, 54),
(20, 'Cinccino', 85, 55, 45, 41, 57, 65);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_pokemon2`
--

CREATE TABLE `tb_pokemon2` (
  `id` int(11) NOT NULL,
  `atributo` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_pokemon2`
--

INSERT INTO `tb_pokemon2` (`id`, `atributo`) VALUES
(11, '[{\"hp\":\"teste\",\"attack\":\"112\",\"defense\":\"12\",\"speed\":\"12\"}]'),
(12, '[{\"hp\":\"33\",\"attack\":\"33\",\"defense\":\"33\",\"speed\":\"33\"}]');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_pokemon`
--
ALTER TABLE `tb_pokemon`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_pokemon2`
--
ALTER TABLE `tb_pokemon2`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `result`
--
ALTER TABLE `result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT de tabela `tb_pokemon`
--
ALTER TABLE `tb_pokemon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `tb_pokemon2`
--
ALTER TABLE `tb_pokemon2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
