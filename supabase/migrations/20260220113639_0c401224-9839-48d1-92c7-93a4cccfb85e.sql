
-- Expenses + Lab Cases + Dentist Schedules (fixed UUIDs)
DO $$
DECLARE
  org UUID := '6040e38e-e336-4a85-929d-fc1b94a07781';
  d1  UUID := 'a1000000-0000-0000-0000-000000000001';
  d2  UUID := 'a1000000-0000-0000-0000-000000000002';
  d3  UUID := 'a1000000-0000-0000-0000-000000000003';
  t6  UUID := 'a1000000-0000-0000-0000-000000000006';
BEGIN

INSERT INTO expenses (id, org_id, expense_date, category, amount, description, vendor, payment_method) VALUES
('ee000000-0000-0000-0000-000000000001', org, '2025-11-01', 'Utilities', 45000, 'Electricity bill - November', 'AEDC', 'transfer'),
('ee000000-0000-0000-0000-000000000002', org, '2025-11-03', 'Supplies', 85000, 'Monthly dental supplies restocking', 'DentSupply Nigeria', 'transfer'),
('ee000000-0000-0000-0000-000000000003', org, '2025-11-10', 'Salaries', 650000, 'Staff salaries - November', 'Payroll', 'transfer'),
('ee000000-0000-0000-0000-000000000004', org, '2025-11-15', 'Maintenance', 32000, 'Autoclave servicing', 'MedTech Services', 'cash'),
('ee000000-0000-0000-0000-000000000005', org, '2025-11-20', 'Marketing', 25000, 'Social media ads - November', 'Meta Ads', 'card'),
('ee000000-0000-0000-0000-000000000006', org, '2025-11-28', 'Supplies', 42000, 'PPE and sterilization supplies', 'MedCare Supplies', 'transfer'),
('ee000000-0000-0000-0000-000000000007', org, '2025-12-01', 'Utilities', 48000, 'Electricity bill - December', 'AEDC', 'transfer'),
('ee000000-0000-0000-0000-000000000008', org, '2025-12-05', 'Supplies', 78000, 'Dental materials restocking', 'DentSupply Nigeria', 'transfer'),
('ee000000-0000-0000-0000-000000000009', org, '2025-12-10', 'Salaries', 650000, 'Staff salaries - December', 'Payroll', 'transfer'),
('ee000000-0000-0000-0000-000000000010', org, '2025-12-12', 'Equipment', 180000, 'New dental X-ray sensor', 'DentEquip Nigeria', 'transfer'),
('ee000000-0000-0000-0000-000000000011', org, '2025-12-20', 'Marketing', 30000, 'End of year promotions', 'Meta Ads', 'card'),
('ee000000-0000-0000-0000-000000000012', org, '2025-12-24', 'Supplies', 35000, 'Lab materials', 'DentSupply Nigeria', 'transfer'),
('ee000000-0000-0000-0000-000000000013', org, '2026-01-02', 'Utilities', 52000, 'Electricity bill - January', 'AEDC', 'transfer'),
('ee000000-0000-0000-0000-000000000014', org, '2026-01-05', 'Supplies', 92000, 'Monthly supplies - January', 'DentSupply Nigeria', 'transfer'),
('ee000000-0000-0000-0000-000000000015', org, '2026-01-10', 'Salaries', 700000, 'Staff salaries - January (+ bonus)', 'Payroll', 'transfer'),
('ee000000-0000-0000-0000-000000000016', org, '2026-01-14', 'Maintenance', 15000, 'Air conditioning service', 'CoolTech', 'cash'),
('ee000000-0000-0000-0000-000000000017', org, '2026-01-20', 'Marketing', 40000, 'New year campaign - social media', 'Meta Ads', 'card'),
('ee000000-0000-0000-0000-000000000018', org, '2026-02-03', 'Utilities', 50000, 'Electricity bill - February', 'AEDC', 'transfer'),
('ee000000-0000-0000-0000-000000000019', org, '2026-02-05', 'Supplies', 88000, 'Monthly supplies - February', 'DentSupply Nigeria', 'transfer'),
('ee000000-0000-0000-0000-000000000020', org, '2026-02-10', 'Salaries', 680000, 'Staff salaries - February', 'Payroll', 'transfer')
ON CONFLICT (id) DO NOTHING;

INSERT INTO dentist_schedules (id, org_id, staff_id, day_of_week, start_time, end_time, break_start, break_end, is_available) VALUES
('dd000000-0000-0000-0000-000000000001', org, d1, 1, '08:00', '17:00', '13:00', '14:00', true),
('dd000000-0000-0000-0000-000000000002', org, d1, 2, '08:00', '17:00', '13:00', '14:00', true),
('dd000000-0000-0000-0000-000000000003', org, d1, 3, '08:00', '17:00', '13:00', '14:00', true),
('dd000000-0000-0000-0000-000000000004', org, d1, 4, '08:00', '17:00', '13:00', '14:00', true),
('dd000000-0000-0000-0000-000000000005', org, d1, 5, '08:00', '15:00', '12:00', '13:00', true),
('dd000000-0000-0000-0000-000000000006', org, d2, 1, '09:00', '17:00', '13:00', '14:00', true),
('dd000000-0000-0000-0000-000000000007', org, d2, 2, '09:00', '17:00', '13:00', '14:00', true),
('dd000000-0000-0000-0000-000000000008', org, d2, 3, '09:00', '17:00', '13:00', '14:00', true),
('dd000000-0000-0000-0000-000000000009', org, d2, 6, '09:00', '14:00', NULL, NULL, true),
('dd000000-0000-0000-0000-000000000010', org, d3, 2, '08:00', '16:00', '12:30', '13:30', true),
('dd000000-0000-0000-0000-000000000011', org, d3, 3, '08:00', '16:00', '12:30', '13:30', true),
('dd000000-0000-0000-0000-000000000012', org, d3, 4, '08:00', '16:00', '12:30', '13:30', true),
('dd000000-0000-0000-0000-000000000013', org, d3, 5, '08:00', '16:00', '12:30', '13:30', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO lab_cases (id, org_id, case_number, patient_id, dentist_id, technician_id, work_type, material, shade, urgency, lab_fee, clinic_fee, status, start_date, due_date, completed_date, instructions) VALUES
('ab000000-0000-0000-0000-000000000001', org, 'LC-2025-001', 'e1000000-0000-0000-0000-000000000002', d1, t6, 'Crown', 'Porcelain-fused-to-metal', 'A2', 'normal', 35000, 90000, 'completed', '2025-11-20', '2025-11-30', '2025-12-02', 'Full crown tooth 36, natural bite adjustment'),
('ab000000-0000-0000-0000-000000000002', org, 'LC-2025-002', 'e1000000-0000-0000-0000-000000000005', d1, t6, 'Veneer', 'Porcelain', 'B1', 'normal', 55000, 150000, 'completed', '2025-12-10', '2025-12-18', '2025-12-18', 'Veneers for teeth 11 and 12'),
('ab000000-0000-0000-0000-000000000003', org, 'LC-2025-003', 'e1000000-0000-0000-0000-000000000023', d1, t6, 'Full Denture', 'Acrylic', NULL, 'normal', 65000, 180000, 'completed', '2025-12-15', '2025-12-30', '2026-01-15', 'Full upper denture - 6 teeth remaining'),
('ab000000-0000-0000-0000-000000000004', org, 'LC-2026-001', 'e1000000-0000-0000-0000-000000000014', d1, t6, 'Crown', 'Full Porcelain', 'A3', 'normal', 38000, 90000, 'completed', '2026-01-12', '2026-01-20', '2026-01-21', 'Crown tooth 46 post-RCT'),
('ab000000-0000-0000-0000-000000000005', org, 'LC-2026-002', 'e1000000-0000-0000-0000-000000000013', d1, t6, 'Veneer', 'Porcelain', 'OM1', 'normal', 55000, 150000, 'completed', '2026-01-25', '2026-02-04', '2026-02-05', 'Veneers teeth 11,12 - match shade of laterals'),
('ab000000-0000-0000-0000-000000000006', org, 'LC-2026-003', 'e1000000-0000-0000-0000-000000000016', d1, t6, 'Crown', 'Zirconia', 'A2', 'urgent', 45000, 90000, 'in_progress', '2026-02-18', '2026-02-25', NULL, 'Zirconia crown tooth 26, urgent - patient in pain')
ON CONFLICT (id) DO NOTHING;

INSERT INTO patient_reviews (id, org_id, patient_id, staff_id, rating, comment) VALUES
('77000000-0000-0000-0000-000000000001', org, 'e1000000-0000-0000-0000-000000000001', d1, 5, 'Dr. Amaka is incredibly professional and gentle. Barely felt the injection!'),
('77000000-0000-0000-0000-000000000002', org, 'e1000000-0000-0000-0000-000000000005', d1, 5, 'My teeth look absolutely amazing after the whitening. Highly recommend Bright Smile!'),
('77000000-0000-0000-0000-000000000003', org, 'e1000000-0000-0000-0000-000000000006', d2, 5, 'Dr. Chidi explained every step of the braces process clearly. Very happy with progress.'),
('77000000-0000-0000-0000-000000000004', org, 'e1000000-0000-0000-0000-000000000003', d3, 5, 'Dr. Fatima was so careful during my cleaning and aware of my pregnancy. Great care!'),
('77000000-0000-0000-0000-000000000005', org, 'e1000000-0000-0000-0000-000000000010', d1, 5, 'Implant procedure was smooth. Two visits and the result looks completely natural.'),
('77000000-0000-0000-0000-000000000006', org, 'e1000000-0000-0000-0000-000000000011', d1, 4, 'Great whitening results! The clinic is very clean and staff are friendly.'),
('77000000-0000-0000-0000-000000000007', org, 'e1000000-0000-0000-0000-000000000014', d1, 5, 'My root canal and crown came out perfect. No pain at all. Very professional team.'),
('77000000-0000-0000-0000-000000000008', org, 'e1000000-0000-0000-0000-000000000023', d1, 5, 'My new dentures fit perfectly and feel completely natural. Tunde did an amazing job.'),
('77000000-0000-0000-0000-000000000009', org, 'e1000000-0000-0000-0000-000000000013', d1, 5, 'My veneers look absolutely stunning. I could not be happier with Bright Smile Dental!'),
('77000000-0000-0000-0000-000000000010', org, 'e1000000-0000-0000-0000-000000000004', d1, 4, 'They were very careful with my diabetes history. Fillings look great and no complications.')
ON CONFLICT (id) DO NOTHING;

END $$;
