-- Constraints for table 'fm_bank_commerce'
--
ALTER TABLE 'fm_bank_commerce'
  ADD CONSTRAINT 'bank_commerce_ibfk_1' FOREIGN KEY ('id_commerce') REFERENCES 'fm_commerce' ('id'),
  ADD CONSTRAINT 'bank_commerce_ibfk_2' FOREIGN KEY ('id_bank') REFERENCES 'fm_bank' ('id');

--
-- Constraints for table 'fm_ciudades'
--
ALTER TABLE 'fm_ciudades'
  ADD CONSTRAINT 'ciudades_ibfk_1' FOREIGN KEY ('id_estado') REFERENCES 'fm_estados' ('id_estado');

--
-- Constraints for table 'fm_cod_postal'
--
ALTER TABLE 'fm_cod_postal'
  ADD CONSTRAINT 'cod_postal_ibfk_1' FOREIGN KEY ('id_parroquia') REFERENCES 'fm_parroquias' ('id_parroquia');

--
-- Constraints for table 'fm_commerce'
--
ALTER TABLE 'fm_commerce'
  ADD CONSTRAINT 'commerce_ibfk_1' FOREIGN KEY ('id_ident_type') REFERENCES 'fm_ident_type' ('id'),
  ADD CONSTRAINT 'commerce_ibfk_2' FOREIGN KEY ('id_activity') REFERENCES 'fm_activity' ('id'),
  ADD CONSTRAINT 'commerce_ibfk_3' FOREIGN KEY ('id_aci') REFERENCES 'fm_user' ('id'),
  ADD CONSTRAINT 'commerce_ibfk_4' FOREIGN KEY ('id_location') REFERENCES 'fm_location' ('id'),
  ADD CONSTRAINT 'commerce_ibfk_5' FOREIGN KEY ('id_user') REFERENCES 'fm_user' ('id');

--
-- Constraints for table 'fm_dir_pos'
--
ALTER TABLE 'fm_dir_pos'
  ADD CONSTRAINT 'dir_pos_ibfk_1' FOREIGN KEY ('id_location') REFERENCES 'fm_location' ('id'),
  ADD CONSTRAINT 'dir_pos_ibfk_2' FOREIGN KEY ('id_commerce') REFERENCES 'fm_commerce' ('id');

--
-- Constraints for table 'fm_location'
--
ALTER TABLE 'fm_location'
  ADD CONSTRAINT 'location_ibfk_1' FOREIGN KEY ('id_estado') REFERENCES 'fm_estados' ('id_estado'),
  ADD CONSTRAINT 'location_ibfk_2' FOREIGN KEY ('id_municipio') REFERENCES 'fm_municipios' ('id_municipio'),
  ADD CONSTRAINT 'location_ibfk_3' FOREIGN KEY ('id_ciudad') REFERENCES 'fm_ciudades' ('id_ciudad'),
  ADD CONSTRAINT 'location_ibfk_4' FOREIGN KEY ('id_parroquia') REFERENCES 'fm_parroquias' ('id_parroquia'),
  ADD CONSTRAINT 'location_ibfk_6' FOREIGN KEY ('id_cod_postal') REFERENCES 'fm_cod_postal' ('id');

--
-- Constraints for table 'fm_municipios'
--
ALTER TABLE 'fm_municipios'
  ADD CONSTRAINT 'municipios_ibfk_1' FOREIGN KEY ('id_estado') REFERENCES 'fm_estados' ('id_estado');

--
-- Constraints for table 'fm_parroquias'
--
ALTER TABLE 'fm_parroquias'
  ADD CONSTRAINT 'parroquias_ibfk_1' FOREIGN KEY ('id_municipio') REFERENCES 'fm_municipios' ('id_municipio');

--
-- Constraints for table 'fm_phone'
--
ALTER TABLE 'fm_phone'
  ADD CONSTRAINT 'fm_phone_ibfk_1' FOREIGN KEY ('id_user') REFERENCES 'fm_user' ('id');

--
-- Constraints for table 'fm_request'
--
ALTER TABLE 'fm_request'
  ADD CONSTRAINT 'fm_request_ibfk_1' FOREIGN KEY ('id_user') REFERENCES 'fm_user' ('id'),
  ADD CONSTRAINT 'fm_request_ibfk_2' FOREIGN KEY ('id_commerce') REFERENCES 'fm_commerce' ('id'),
  ADD CONSTRAINT 'fm_request_ibfk_3' FOREIGN KEY ('id_type_request') REFERENCES 'fm_type_request' ('id'),
  ADD CONSTRAINT 'fm_request_ibfk_4' FOREIGN KEY ('id_status_request') REFERENCES 'fm_status_request' ('id'),
  ADD CONSTRAINT 'fm_request_ibfk_5' FOREIGN KEY ('id_way_pay') REFERENCES 'fm_way_pay' ('id');

--
-- Constraints for table 'fm_user'
--
ALTER TABLE 'fm_user'
  ADD CONSTRAINT 'user_ibfk_1' FOREIGN KEY ('id_roles') REFERENCES 'fm_roles' ('id'),
  ADD CONSTRAINT 'user_ibfk_2' FOREIGN KEY ('id_ident_type') REFERENCES 'fm_ident_type' ('id'),
  ADD CONSTRAINT 'user_ibfk_3' FOREIGN KEY ('id_depart') REFERENCES 'fm_department' ('id');
COMMIT;