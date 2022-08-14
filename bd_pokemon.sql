-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12-Ago-2022 às 19:42
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

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
-- Estrutura da tabela `tb_pokemon`
--

CREATE TABLE `tb_pokemon` (
  `id` int(11) NOT NULL,
  `file` varchar(300) NOT NULL,
  `name` varchar(150) NOT NULL,
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

INSERT INTO `tb_pokemon` (`id`, `file`, `name`, `hp`, `attack`, `defense`, `speed`, `special_attack`, `special_defense`) VALUES
(3, '1.png1660325124720.png', 'BULBASAUR', 45, 49, 49, 65, 65, 45),
(4, '2.png1660325210437.png', 'IVYSAUR', 60, 62, 63, 80, 80, 60),
(5, '3.png1660325268227.png', 'VENUSAUR', 80, 82, 83, 100, 100, 80),
(6, '4.png1660325318977.png', 'CHARMANDER', 39, 52, 43, 60, 50, 65),
(7, '5.png1660325372700.png', 'CHARMELEON', 58, 64, 58, 80, 65, 80),
(8, '6.png1660325419815.png', 'CHARIZARD', 78, 84, 78, 109, 85, 100),
(9, '7.png1660325471506.png', 'SQUIRTLE', 44, 48, 65, 50, 64, 43),
(10, '8.png1660325539627.png', 'SQUIRTLE', 59, 63, 80, 65, 80, 58),
(11, '9.png1660325591757.png', 'BLASTOISE', 79, 83, 100, 85, 105, 78),
(12, '10.png1660325646288.png', 'CATERPIE', 45, 30, 35, 20, 20, 45),
(13, '11.png1660325684672.png', 'METAPOD', 50, 20, 55, 25, 25, 30),
(14, '12.png1660325734305.png', 'BUTTERFREE', 60, 45, 50, 90, 80, 70),
(15, '13.png1660325782796.png', 'WEEDLE', 40, 35, 30, 20, 20, 50),
(16, '14.png1660325824919.png', 'KAKUNA', 45, 25, 50, 25, 25, 35),
(17, '15.png1660325874375.png', 'KAKUNA', 65, 90, 40, 45, 80, 75),
(18, '16.png1660325922720.png', 'PIDGEY', 40, 45, 40, 35, 35, 56),
(19, '17.png1660325964368.png', 'PIDGEOTTO', 63, 60, 55, 50, 50, 71),
(20, '18.png1660326009101.png', 'PIDGEOT', 83, 80, 75, 70, 70, 101),
(21, '19.png1660326066088.png', 'RATTATA', 30, 56, 35, 25, 35, 72),
(22, '20.png1660326120157.png', 'RATICATE', 55, 81, 60, 50, 70, 97);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_pokemon`
--
ALTER TABLE `tb_pokemon`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_pokemon`
--
ALTER TABLE `tb_pokemon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
