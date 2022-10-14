
-- local  ------------------------------------


CREATE TABLE `curd_User`.`tbl_User`
( 
`tb_UserID`  INT(255) NOT NULL AUTO_INCREMENT ,
`tb_name`  VARCHAR(255) NOT NULL,
`tb_mobile`  VARCHAR(10),
`tb_emailid`  VARCHAR(50),
`tb_userstatus`  VARCHAR(10) NOT NULL,
`tb_password`  VARCHAR(100) NOT NULL,
`tb_createddate`  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
`tb_updateddate`  TIMESTAMP default now() on update now(),
    PRIMARY KEY(`tb_UserID`)
) ENGINE = InnoDB;
---------------------------------------------------------

