-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
		
CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR NULL DEFAULT NULL,
  `password` VARCHAR NULL DEFAULT NULL,
  `verificationCode` VARCHAR NULL DEFAULT NULL,
  `isVerified` BINARY NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Games'
-- 
-- ---

DROP TABLE IF EXISTS `Games`;
		
CREATE TABLE `Games` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `status` INTEGER NULL DEFAULT NULL,
  `direction` BINARY NULL DEFAULT NULL,
  `UserId` INTEGER NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'GameUsers'
-- 
-- ---

DROP TABLE IF EXISTS `GameUsers`;
		
CREATE TABLE `GameUsers` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `UserId` INTEGER NULL DEFAULT NULL,
  `GameId` INTEGER NULL DEFAULT NULL,
  `position` INTEGER NULL DEFAULT NULL,
  `status` INTEGER NULL DEFAULT NULL,
  `isCurrent` BINARY NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Chats'
-- 
-- ---

DROP TABLE IF EXISTS `Chats`;
		
CREATE TABLE `Chats` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `message` MEDIUMTEXT NULL DEFAULT NULL,
  `GameUserId` INTEGER NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Passwords'
-- 
-- ---

DROP TABLE IF EXISTS `Passwords`;
		
CREATE TABLE `Passwords` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `link` VARCHAR NULL DEFAULT NULL,
  `oldPassword` VARCHAR NULL DEFAULT NULL,
  `newPassword` VARCHAR NULL DEFAULT NULL,
  `UserId` INTEGER NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Sessions'
-- 
-- ---

DROP TABLE IF EXISTS `Sessions`;
		
CREATE TABLE `Sessions` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `jwtCode` VARCHAR NULL DEFAULT NULL,
  `expiry` DATETIME NULL DEFAULT NULL,
  `UserId` INTEGER NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Lobbies'
-- 
-- ---

DROP TABLE IF EXISTS `Lobbies`;
		
CREATE TABLE `Lobbies` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `message` VARCHAR NULL DEFAULT NULL,
  `UserId` INTEGER NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Cards'
-- 
-- ---

DROP TABLE IF EXISTS `Cards`;
		
CREATE TABLE `Cards` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `xCoord` INTEGER NULL DEFAULT NULL,
  `yCoord` INTEGER NULL DEFAULT NULL,
  `type` INTEGER NULL DEFAULT NULL,
  `color` INTEGER NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'UserPlays'
-- 
-- ---

DROP TABLE IF EXISTS `UserPlays`;
		
CREATE TABLE `UserPlays` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `GameUserId` INTEGER NULL DEFAULT NULL,
  `CardId` INTEGER NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Games` ADD FOREIGN KEY (UserId) REFERENCES `Users` (`id`);
ALTER TABLE `GameUsers` ADD FOREIGN KEY (UserId) REFERENCES `Users` (`id`);
ALTER TABLE `GameUsers` ADD FOREIGN KEY (GameId) REFERENCES `Games` (`id`);
ALTER TABLE `Chats` ADD FOREIGN KEY (GameUserId) REFERENCES `GameUsers` (`id`);
ALTER TABLE `Passwords` ADD FOREIGN KEY (UserId) REFERENCES `Users` (`id`);
ALTER TABLE `Sessions` ADD FOREIGN KEY (UserId) REFERENCES `Users` (`id`);
ALTER TABLE `Lobbies` ADD FOREIGN KEY (UserId) REFERENCES `Users` (`id`);
ALTER TABLE `UserPlays` ADD FOREIGN KEY (GameUserId) REFERENCES `GameUsers` (`id`);
ALTER TABLE `UserPlays` ADD FOREIGN KEY (CardId) REFERENCES `Cards` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Games` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `GameUsers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Chats` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Passwords` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Sessions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Lobbies` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Cards` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `UserPlays` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`username`,`name`,`email`,`password`,`verificationCode`,`isVerified`,`createdAt`,`updatedAt`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `Games` (`id`,`name`,`status`,`direction`,`UserId`,`createdAt`,`updatedAt`) VALUES
-- ('','','','','','','');
-- INSERT INTO `GameUsers` (`id`,`UserId`,`GameId`,`position`,`status`,`isCurrent`,`createdAt`,`updatedAt`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `Chats` (`id`,`message`,`GameUserId`,`createdAt`,`updatedAt`) VALUES
-- ('','','','','');
-- INSERT INTO `Passwords` (`id`,`link`,`oldPassword`,`newPassword`,`UserId`,`createdAt`,`updatedAt`) VALUES
-- ('','','','','','','');
-- INSERT INTO `Sessions` (`id`,`jwtCode`,`expiry`,`UserId`,`createdAt`,`updatedAt`) VALUES
-- ('','','','','','');
-- INSERT INTO `Lobbies` (`id`,`message`,`UserId`,`createdAt`,`updatedAt`) VALUES
-- ('','','','','');
-- INSERT INTO `Cards` (`id`,`name`,`xCoord`,`yCoord`,`type`,`color`,`createdAt`,`updatedAt`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `UserPlays` (`id`,`GameUserId`,`CardId`,`createdAt`,`updatedAt`) VALUES
-- ('','','','','');