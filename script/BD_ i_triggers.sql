-- ----------------------------------------------------------------------
-- ----------------------------------------------------------------------
--    DISPARADOR PARA CUANDO SE iNSERTE UN 'OWNER' agregarle un "contact"
-- ----------------------------------------------------------------------
CREATE PROCEDURE if not exists createContact() INSERT INTO contact VALUES();

delimiter //
CREATE trigger if not exists createOwner 
BEFORE INSERT ON `owner` 
FOR EACH ROW
BEGIN
	DECLARE lastId INTEGER;
    CALL createContact();
    SET @lastId = LAST_INSERT_ID();
    SET new.contact_id = @lastId;
    
END//
delimiter ;
-- ----------------------------------------------------------------------
-- ----------------------------------------------------------------------
--

-- ----------------------------------------------------------------------
-- ----------------------------------------------------------------------
--    DISPARADOR PARA CUANDO SE ELIMINE UN 'OWNER' eliminar su "contact"
-- ----------------------------------------------------------------------
delimiter //
CREATE trigger if not exists deleteOwner 
BEFORE DELETE ON `owner` 
FOR EACH ROW
BEGIN
    DELETE FROM contact WHERE id = OLD.contact_id;    
END//
delimiter ;
-- ----------------------------------------------------------------------
-- ----------------------------------------------------------------------
--

