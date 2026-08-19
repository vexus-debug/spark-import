
-- ============================================================
-- SEED DEMO CLINIC  (org_id = 6040e38e-e336-4a85-929d-fc1b94a07781)
-- Step 1: Staff + Treatments + Inventory + Clinic info
-- ============================================================

DO $$
DECLARE
  org UUID := '6040e38e-e336-4a85-929d-fc1b94a07781';
BEGIN

-- Update org info
UPDATE organizations
SET name = 'Bright Smile Dental Clinic',
    email = 'info@brightsmile.ng',
    phone = '+234 801 234 5678',
    address = '14 Adetokunbo Ademola Crescent, Wuse 2, Abuja, Nigeria'
WHERE id = org;

-- ---- STAFF ----
INSERT INTO staff (id, org_id, full_name, role, specialty, email, phone, status) VALUES
  ('a1000000-0000-0000-0000-000000000001', org, 'Dr. Amaka Okonkwo', 'dentist', 'General & Cosmetic Dentistry', 'amaka.okonkwo@brightsmile.ng', '+234 802 111 0001', 'active'),
  ('a1000000-0000-0000-0000-000000000002', org, 'Dr. Chidi Eze', 'dentist', 'Orthodontics', 'chidi.eze@brightsmile.ng', '+234 802 111 0002', 'active'),
  ('a1000000-0000-0000-0000-000000000003', org, 'Dr. Fatima Bello', 'hygienist', 'Periodontics & Hygiene', 'fatima.bello@brightsmile.ng', '+234 802 111 0003', 'active'),
  ('a1000000-0000-0000-0000-000000000004', org, 'Ngozi Adeyemi', 'receptionist', NULL, 'ngozi.adeyemi@brightsmile.ng', '+234 802 111 0004', 'active'),
  ('a1000000-0000-0000-0000-000000000005', org, 'Emeka Nwosu', 'accountant', NULL, 'emeka.nwosu@brightsmile.ng', '+234 802 111 0005', 'active'),
  ('a1000000-0000-0000-0000-000000000006', org, 'Tunde Lawal', 'lab_technician', 'Dental Prosthetics', 'tunde.lawal@brightsmile.ng', '+234 802 111 0006', 'active')
ON CONFLICT (id) DO NOTHING;

-- ---- TREATMENTS ----
INSERT INTO treatments (id, org_id, name, category, price, duration, description, status) VALUES
  ('b1000000-0000-0000-0000-000000000001', org, 'Dental Consultation', 'General', 5000, 30, 'Initial examination and X-ray analysis', 'active'),
  ('b1000000-0000-0000-0000-000000000002', org, 'Teeth Cleaning (Scaling & Polishing)', 'Hygiene', 15000, 45, 'Professional scaling and polishing', 'active'),
  ('b1000000-0000-0000-0000-000000000003', org, 'Tooth Filling (Composite)', 'Restorative', 20000, 60, 'Tooth-coloured composite filling', 'active'),
  ('b1000000-0000-0000-0000-000000000004', org, 'Tooth Extraction (Simple)', 'Oral Surgery', 12000, 30, 'Simple single tooth extraction', 'active'),
  ('b1000000-0000-0000-0000-000000000005', org, 'Root Canal Treatment', 'Endodontics', 65000, 90, 'Complete root canal therapy per tooth', 'active'),
  ('b1000000-0000-0000-0000-000000000006', org, 'Porcelain Crown', 'Prosthodontics', 90000, 60, 'Full porcelain dental crown', 'active'),
  ('b1000000-0000-0000-0000-000000000007', org, 'Teeth Whitening', 'Cosmetic', 45000, 60, 'In-office professional teeth whitening', 'active'),
  ('b1000000-0000-0000-0000-000000000008', org, 'Dental Implant', 'Implantology', 350000, 120, 'Single titanium implant with crown', 'active'),
  ('b1000000-0000-0000-0000-000000000009', org, 'Orthodontic Braces (Metal)', 'Orthodontics', 280000, 60, 'Traditional metal braces - full treatment', 'active'),
  ('b1000000-0000-0000-0000-000000000010', org, 'Denture (Full)', 'Prosthodontics', 180000, 60, 'Full upper or lower acrylic denture', 'active'),
  ('b1000000-0000-0000-0000-000000000011', org, 'Dental X-Ray (Periapical)', 'Diagnostics', 3500, 15, 'Periapical radiograph', 'active'),
  ('b1000000-0000-0000-0000-000000000012', org, 'Gum Treatment (Deep Cleaning)', 'Periodontics', 35000, 90, 'Subgingival scaling and root planing', 'active'),
  ('b1000000-0000-0000-0000-000000000013', org, 'Veneer (Porcelain)', 'Cosmetic', 75000, 60, 'Porcelain dental veneer per tooth', 'active'),
  ('b1000000-0000-0000-0000-000000000014', org, 'Night Guard / Splint', 'Protective', 25000, 30, 'Custom occlusal night guard', 'active'),
  ('b1000000-0000-0000-0000-000000000015', org, 'Pediatric Dental Check-up', 'Pediatric', 8000, 30, 'Children dental examination and fluoride', 'active')
ON CONFLICT (id) DO NOTHING;

-- ---- CLINIC CHAIRS ----
INSERT INTO clinic_chairs (id, org_id, name, room, status) VALUES
  ('c1000000-0000-0000-0000-000000000001', org, 'Chair 1', 'Room A', 'available'),
  ('c1000000-0000-0000-0000-000000000002', org, 'Chair 2', 'Room A', 'available'),
  ('c1000000-0000-0000-0000-000000000003', org, 'Chair 3', 'Room B', 'available'),
  ('c1000000-0000-0000-0000-000000000004', org, 'Chair 4', 'Room B', 'available')
ON CONFLICT (id) DO NOTHING;

-- ---- INVENTORY ----
INSERT INTO inventory (id, org_id, name, category, unit, quantity, min_stock, unit_cost, supplier, last_restocked) VALUES
  ('d1000000-0000-0000-0000-000000000001', org, 'Composite Resin (A2 Shade)', 'Restorative Materials', 'syringe', 45, 10, 8500, 'DentSupply Nigeria', CURRENT_DATE - 15),
  ('d1000000-0000-0000-0000-000000000002', org, 'Latex Gloves (Medium)', 'PPE', 'box', 120, 20, 3200, 'MedCare Supplies', CURRENT_DATE - 10),
  ('d1000000-0000-0000-0000-000000000003', org, 'Dental Anaesthetic (Lidocaine)', 'Medications', 'cartridge', 200, 50, 450, 'PharmaLink NG', CURRENT_DATE - 5),
  ('d1000000-0000-0000-0000-000000000004', org, 'Surgical Masks', 'PPE', 'box', 80, 15, 2500, 'MedCare Supplies', CURRENT_DATE - 10),
  ('d1000000-0000-0000-0000-000000000005', org, 'Dental Burs (Diamond Set)', 'Instruments', 'pack', 30, 8, 12000, 'DentSupply Nigeria', CURRENT_DATE - 20),
  ('d1000000-0000-0000-0000-000000000006', org, 'Impression Material (Alginate)', 'Restorative Materials', 'kg', 15, 3, 6500, 'DentSupply Nigeria', CURRENT_DATE - 12),
  ('d1000000-0000-0000-0000-000000000007', org, 'Teeth Whitening Gel (35% HP)', 'Cosmetic', 'kit', 20, 5, 18000, 'SmilePro Distributors', CURRENT_DATE - 8),
  ('d1000000-0000-0000-0000-000000000008', org, 'Sutures (3-0 Vicryl)', 'Surgical', 'pack', 50, 10, 2200, 'MedCare Supplies', CURRENT_DATE - 6),
  ('d1000000-0000-0000-0000-000000000009', org, 'Sterilization Pouches', 'Infection Control', 'box', 10, 3, 4500, 'MedCare Supplies', CURRENT_DATE - 18),
  ('d1000000-0000-0000-0000-000000000010', org, 'Fluoride Varnish', 'Preventive', 'ml', 250, 50, 180, 'PharmaLink NG', CURRENT_DATE - 14)
ON CONFLICT (id) DO NOTHING;

END $$;
