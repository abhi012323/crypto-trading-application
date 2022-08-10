CREATE DATABASE IF NOT EXISTS `BC39Minet`;
USE `BC39Minet`;

DROP TABLE IF EXISTS `cryptoCurrency`;
CREATE TABLE `cryptoCurrency` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` LINESTRING NOT NULL,
  `symbol` LINESTRING NOT NULL,
  `currentValue` FLOAT NOT NULL,
  `icon` LINESTRING NOT NULL,
  `trend` JSON NOT NULL,
  PRIMARY KEY (`id`)
)AUTO_INCREMENT=1;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `availableBalance` FLOAT NULL,
  `purchasedCryptos` JSON NULL,
  `trend` JSON NULL,
  PRIMARY KEY (`id`)
)AUTO_INCREMENT=1;

DROP TABLE IF EXISTS `transaction`;
CREATE TABLE `transaction` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` LINESTRING NOT NULL,
  `userId` INT NOT NULL,
  `cryptoId` INT NOT NULL,
  `date` DATE NOT NULL,
  `cryptoAmount` FLOAT NOT NULL,
  `dollarAmount` VARCHAR(50) NOT NULL,
  PRIMARY KEY(`id`),
    FOREIGN KEY(`cryptoId`) REFERENCES `cryptoCurrency`(`id`),
    FOREIGN KEY(`userId`) REFERENCES `user`(`id`)
)AUTO_INCREMENT=1;




