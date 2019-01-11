DROP TABLE IF EXISTS `global`;
CREATE TABLE `global` (
  `key` varchar(64) NOT NULL,
  `value` json NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `key` varchar(64) NOT NULL,
  `value` json NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
