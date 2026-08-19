
-- ============================================================
-- SEED DEMO CLINIC — Step 2: Patients
-- ============================================================
DO $$
DECLARE org UUID := '6040e38e-e336-4a85-929d-fc1b94a07781';
BEGIN

INSERT INTO patients (id, org_id, first_name, last_name, gender, date_of_birth, phone, email, blood_group, allergies, medical_history, referral_source, status) VALUES
  ('e1000000-0000-0000-0000-000000000001', org, 'Adaeze', 'Okafor', 'female', '1990-04-12', '+234 803 200 0001', 'adaeze.okafor@gmail.com', 'O+', 'Penicillin', 'Mild hypertension', 'Walk-in', 'active'),
  ('e1000000-0000-0000-0000-000000000002', org, 'Babatunde', 'Salami', 'male', '1985-07-22', '+234 803 200 0002', 'bsalami@yahoo.com', 'A+', NULL, NULL, 'Referral - Dr. Adewale', 'active'),
  ('e1000000-0000-0000-0000-000000000003', org, 'Chioma', 'Ibe', 'female', '1995-01-30', '+234 803 200 0003', 'chioma.ibe@gmail.com', 'B+', 'Latex', 'Asthma - uses inhaler', 'Social Media', 'active'),
  ('e1000000-0000-0000-0000-000000000004', org, 'Danladi', 'Musa', 'male', '1978-11-05', '+234 803 200 0004', 'danladi.musa@hotmail.com', 'AB+', NULL, 'Type 2 Diabetes', 'Walk-in', 'active'),
  ('e1000000-0000-0000-0000-000000000005', org, 'Efua', 'Asante', 'female', '2000-06-18', '+234 803 200 0005', 'efua.asante@gmail.com', 'O-', NULL, NULL, 'Google Search', 'active'),
  ('e1000000-0000-0000-0000-000000000006', org, 'Femi', 'Adesanya', 'male', '1992-09-03', '+234 803 200 0006', 'femi.adesanya@gmail.com', 'A-', 'Ibuprofen', NULL, 'Referral - Patient', 'active'),
  ('e1000000-0000-0000-0000-000000000007', org, 'Grace', 'Oduola', 'female', '1988-02-14', '+234 803 200 0007', 'grace.oduola@gmail.com', 'B+', NULL, 'Pregnancy - 2nd trimester', 'Instagram', 'active'),
  ('e1000000-0000-0000-0000-000000000008', org, 'Hassan', 'Ibrahim', 'male', '1975-12-28', '+234 803 200 0008', 'hassan.ibrahim@yahoo.com', 'O+', 'Sulfa drugs', 'Hypertension, on amlodipine', 'Walk-in', 'active'),
  ('e1000000-0000-0000-0000-000000000009', org, 'Ifeoma', 'Eze', 'female', '2005-08-09', '+234 803 200 0009', 'ifeoma.eze@gmail.com', 'A+', NULL, NULL, 'School Referral', 'active'),
  ('e1000000-0000-0000-0000-000000000010', org, 'John', 'Obi', 'male', '1982-03-17', '+234 803 200 0010', 'john.obi@gmail.com', 'O+', NULL, NULL, 'Walk-in', 'active'),
  ('e1000000-0000-0000-0000-000000000011', org, 'Kemi', 'Adunola', 'female', '1993-05-25', '+234 803 200 0011', 'kemi.adunola@gmail.com', 'AB-', NULL, NULL, 'Google Search', 'active'),
  ('e1000000-0000-0000-0000-000000000012', org, 'Lanre', 'Badmus', 'male', '1970-10-11', '+234 803 200 0012', 'lanre.badmus@gmail.com', 'B-', 'Aspirin', 'Atrial fibrillation - on warfarin', 'Referral - Dr. Adewale', 'active'),
  ('e1000000-0000-0000-0000-000000000013', org, 'Miriam', 'Garba', 'female', '1998-07-07', '+234 803 200 0013', 'miriam.garba@gmail.com', 'O+', NULL, NULL, 'Instagram', 'active'),
  ('e1000000-0000-0000-0000-000000000014', org, 'Nnamdi', 'Chukwu', 'male', '1987-04-20', '+234 803 200 0014', 'nnamdi.chukwu@gmail.com', 'A+', NULL, NULL, 'Walk-in', 'active'),
  ('e1000000-0000-0000-0000-000000000015', org, 'Oluwaseun', 'Afolabi', 'female', '2001-11-15', '+234 803 200 0015', 'seun.afolabi@gmail.com', 'B+', NULL, NULL, 'Social Media', 'active'),
  ('e1000000-0000-0000-0000-000000000016', org, 'Peter', 'Okeke', 'male', '1980-01-08', '+234 803 200 0016', 'peter.okeke@gmail.com', 'O+', 'Penicillin', 'Epilepsy - on carbamazepine', 'Walk-in', 'active'),
  ('e1000000-0000-0000-0000-000000000017', org, 'Queen', 'Nnadi', 'female', '1996-06-30', '+234 803 200 0017', 'queen.nnadi@gmail.com', 'A+', NULL, NULL, 'Google Search', 'active'),
  ('e1000000-0000-0000-0000-000000000018', org, 'Rasheed', 'Balogun', 'male', '1972-09-19', '+234 803 200 0018', 'rasheed.balogun@yahoo.com', 'AB+', NULL, 'Type 2 Diabetes', 'Referral - Patient', 'active'),
  ('e1000000-0000-0000-0000-000000000019', org, 'Sade', 'Williams', 'female', '2008-03-22', '+234 803 200 0019', 'sade.williams@gmail.com', 'O+', NULL, NULL, 'School Referral', 'active'),
  ('e1000000-0000-0000-0000-000000000020', org, 'Tochi', 'Obioma', 'male', '1991-12-04', '+234 803 200 0020', 'tochi.obioma@gmail.com', 'B+', NULL, NULL, 'Walk-in', 'active'),
  ('e1000000-0000-0000-0000-000000000021', org, 'Uche', 'Amadi', 'male', '1984-08-16', '+234 803 200 0021', 'uche.amadi@gmail.com', 'A-', NULL, NULL, 'Instagram', 'active'),
  ('e1000000-0000-0000-0000-000000000022', org, 'Vera', 'Okonkwo', 'female', '1999-02-28', '+234 803 200 0022', 'vera.okonkwo@gmail.com', 'O+', 'Latex', NULL, 'Google Search', 'active'),
  ('e1000000-0000-0000-0000-000000000023', org, 'Wale', 'Ojo', 'male', '1976-05-13', '+234 803 200 0023', 'wale.ojo@gmail.com', 'A+', NULL, 'Hypertension', 'Walk-in', 'active'),
  ('e1000000-0000-0000-0000-000000000024', org, 'Xena', 'Bright', 'female', '2003-10-05', '+234 803 200 0024', 'xena.bright@gmail.com', 'B+', NULL, NULL, 'Social Media', 'active'),
  ('e1000000-0000-0000-0000-000000000025', org, 'Yusuf', 'Abdullahi', 'male', '1968-07-01', '+234 803 200 0025', 'yusuf.abdullahi@yahoo.com', 'O-', NULL, 'Hypertension, Glaucoma', 'Walk-in', 'active'),
  ('e1000000-0000-0000-0000-000000000026', org, 'Zainab', 'Umar', 'female', '1994-04-17', '+234 803 200 0026', 'zainab.umar@gmail.com', 'A+', NULL, NULL, 'Referral - Patient', 'active'),
  ('e1000000-0000-0000-0000-000000000027', org, 'Aminu', 'Dada', 'male', '1989-11-23', '+234 803 200 0027', 'aminu.dada@gmail.com', 'B+', NULL, NULL, 'Walk-in', 'active'),
  ('e1000000-0000-0000-0000-000000000028', org, 'Blessing', 'Uchenna', 'female', '2002-01-11', '+234 803 200 0028', 'blessing.uchenna@gmail.com', 'O+', NULL, NULL, 'Instagram', 'active'),
  ('e1000000-0000-0000-0000-000000000029', org, 'Chukwuemeka', 'Obi', 'male', '1981-06-08', '+234 803 200 0029', 'chukwuemeka.obi@gmail.com', 'AB+', NULL, NULL, 'Google Search', 'active'),
  ('e1000000-0000-0000-0000-000000000030', org, 'Dolapo', 'Fashola', 'female', '1997-09-27', '+234 803 200 0030', 'dolapo.fashola@gmail.com', 'A+', NULL, NULL, 'Walk-in', 'active')
ON CONFLICT (id) DO NOTHING;

END $$;
