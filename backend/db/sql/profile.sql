#----------------localll---------
CREATE TABLE `agentportal`.`profile` ( 
    `sno` INT(255) NOT NULL AUTO_INCREMENT , 
    `agentcode` VARCHAR(50) NOT NULL , 
    `name` VARCHAR(50) NOT NULL , 
    `password` VARCHAR(50) NOT NULL , 
    `role` VARCHAR(50) NOT NULL ,
    `email` VARCHAR(50) NOT NULL ,
    `mobile` VARCHAR(50) NOT NULL ,
    `status` VARCHAR(50) NOT NULL ,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    `updated_at` TIMESTAMP default now() on update now() ,
    PRIMARY KEY (`sno`)
    ) ENGINE = InnoDB;
#--------------dev ------------



#------------------prod----------------

