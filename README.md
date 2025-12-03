# Tea Cooperative ERP System - User Manual

## දළු සමුපකාර ERP පද්ධතිය - පරිශීලක අත්පොත

---

## Table of Contents / අන්තර්ගතය

1. [Introduction / හැඳින්වීම](#introduction)
2. [Getting Started / ආරම්භක පියවර](#getting-started)
3. [System Modules / පද්ධති මොඩියුල](#system-modules)
4. [Detailed Module Guides / විස්තරාත්මක මොඩියුල මාර්ගෝපදේශ](#detailed-module-guides)
5. [Keyboard Shortcuts / යතුරු පුවරු කෙටිමං](#keyboard-shortcuts)
6. [Troubleshooting / ගැටළු විසඳීම](#troubleshooting)

---

## 1. Introduction / හැඳින්වීම

### About the System / පද්ධතිය ගැන

The Tea Cooperative ERP System is a comprehensive management system designed for tea cooperatives to manage:

- Member information and transactions
- Green leaf collection and data entry
- Transport lines and agents
- Payment processing and management
- Loans and financial records
- Reports and analytics

**දළු සමුපකාර ERP පද්ධතිය** යනු තේ සමුපකාර සංවිධාන සඳහා නිර්මාණය කරන ලද සම්පූර්ණ කළමනාකරණ පද්ධතියකි. මෙයින් කළමනාකරණය කරනු ලබන්නේ:

- සාමාජික තොරතුරු සහ ගනුදෙනු
- දළු එකතු කිරීම සහ දත්ත ඇතුළත් කිරීම
- ප්‍රවාහන මාර්ග සහ නියෝජිතයින්
- ගෙවීම් සැකසීම සහ කළමනාකරණය
- ණය සහ මූල්‍ය වාර්තා
- වාර්තා සහ විශ්ලේෂණ

---

## 2. Getting Started / ආරම්භක පියවර

### 2.1 Login / පිවිසීම

1. Open your web browser and navigate to the system URL
2. You will be automatically redirected to the Keycloak login page
3. Enter your **Username** and **Password**
4. Click **Sign In** or press **Enter**

**Note:** The system uses Keycloak for secure authentication. If you don't have credentials, contact your system administrator.

**සටහන:** පද්ධතිය Keycloak භාවිතා කරනු ලබන්නේ ආරක්ෂිත සත්‍යාපනය සඳහාය. ඔබට අක්තපත්‍ර නොමැති නම්, ඔබේ පද්ධති පරිපාලකයා සමඟ සම්බන්ධ වන්න.

### 2.2 Dashboard / ප්‍රධාන පිටුව

After successful login, you will see the **Dashboard** which provides:

- Quick overview of system statistics
- Recent activities
- Quick access to frequently used modules

පිවිසීමෙන් පසු, ඔබට **ප්‍රධාන පිටුව** දිස්වනු ඇත, එයින් ලබා දෙනු ලබන්නේ:

- පද්ධති සංඛ්‍යාන දැක්ම
- මෑත ක්‍රියාකාරකම්
- නිතර භාවිතා කරන මොඩියුල වෙත ඉක්මන් ප්‍රවේශය

### 2.3 Navigation / සංචලනය

The system uses a sidebar navigation menu organized into main modules:

- **සැකසීම්** (Settings)
- **ප්‍රවාහන මාර්ග** (Transport Lines)
- **සාමාජික තොරතුරු** (Member Information)
- **දළු බාර ගැනීමේ තොරතුරු** (Green Leaf Information)
- **දළු මිල සැකසීම** (Green Leaf Payment Setup)
- **ණය සැකසීම** (Loan Management)
- **වාර්තා** (Reports)

Click on any module to expand and see its sub-menu items.

---

## 3. System Modules / පද්ධති මොඩියුල

### 3.1 Settings / සැකසීම්

**Location:** Sidebar → සැකසීම්

**Sub-modules:**

- **කර්මාන්ත ශාලා** (Factory) - Manage factory information
- **පරිශීලකයන්** (Users) - Manage system users and permissions

### 3.2 Transport Lines / ප්‍රවාහන මාර්ග

**Location:** Sidebar → ප්‍රවාහන මාර්ග

**Sub-modules:**

- **ප්‍රවාහන නියෝජිතයින්** (Transport Agents) - Manage transport agents
- **ප්‍රවාහන මාර්ග** (Transport Lines) - Manage transport routes
- **ප්‍රවාහන මාර්ග වාර්තාව** (Transport Line Report) - View transport line reports
- **ප්‍රවාහන ගෙවීම් පත** (Transport Payment Slip) - Generate payment slips for transport lines
- **ගෙවීම් සැකසීම** (Payment Management) - Manage transport line payments

### 3.3 Member Information / සාමාජික තොරතුරු

**Location:** Sidebar → සාමාජික තොරතුරු

**Sub-modules:**

- **සාමාජිකයන්** (Members) - View, add, edit member information
- **සාමාජික කලාපය** (Member Lines) - Manage member line assignments
- **සාරාංශය** (Summary) - View member summary dashboard
- **බැංකු** (Banks) - Manage bank accounts

### 3.4 Green Leaf Information / දළු බාර ගැනීමේ තොරතුරු

**Location:** Sidebar → දළු බාර ගැනීමේ තොරතුරු

**Sub-modules:**

- **දළු දත්ත ඇතුලත් කිරීම** (Green Leaf Data Entry) - Enter daily green leaf collection data
- **දළු බාරගැනීම** (Green Leaf Collection) - View and manage green leaf records
- **රන් දළු බාරගැනීම** (Gold Leaf Collection) - Manage gold leaf records
- **දළු වාර්තාව** (Green Leaf Report) - Generate daily, monthly, and yearly reports
- **කලාප වාර්තාව** (Line Report) - View reports by transport line
- **දළු අනුපාතය** (Rates) - Manage green leaf and gold leaf rates

### 3.5 Green Leaf Payment Setup / දළු මිල සැකසීම

**Location:** Sidebar → දළු මිල සැකසීම

**Sub-modules:**

- **ගෙවීම් සැකසීම** (Payment Management) - Configure payment calculations
- **ගෙවීම් පත්** (Payment Slips) - Generate and view payment slips

### 3.6 Loan Management / ණය සැකසීම

**Location:** Sidebar → ණය සැකසීම

**Sub-modules:**

- **ණය** (Loans) - Manage member loans

### 3.7 Reports / වාර්තා

**Location:** Sidebar → වාර්තා

**Sub-modules:**

- **දළු ගෙවීම් ලේඛණය** (Member Ledger) - View member transaction ledger
- **සම්පුර්ණ වාර්තාව** (Overall Report) - Comprehensive system reports
- **සයමාසික සාරාංශය** (Six Month Summary) - Six-month summary reports
- **SMS Logs** - View SMS notification logs

---

## 4. Detailed Module Guides / විස්තරාත්මක මොඩියුල මාර්ගෝපදේශ

### 4.1 Green Leaf Data Entry / දළු දත්ත ඇතුලත් කිරීම

This is one of the most frequently used modules for entering daily green leaf collection data.

#### Step-by-Step Guide:

1. **Navigate to the module:**

   - Click **දළු බාර ගැනීමේ තොරතුරු** → **දළු දත්ත ඇතුලත් කිරීම**

2. **Fill in the header information:**

   - **දළු ලබාදුන් දිනය** (Leaf Handover Date) - Select the date using the date picker
   - **කර්මාන්ත ශාලාව** (Factory) - Select the factory from the dropdown
   - **ප්‍රවාහන මාර්ගය** (Transport Line) - Select the transport route (options filtered by selected factory)
   - **ප්‍රවාහන නියෝජිත** (Transport Agent) - Automatically populated based on selected transport line
   - **දළු කිරුම් නිළධාරි** (Leaf Weight Officer) - Select the officer from the dropdown
   - **අධීක්ෂණය** (Supervisor) - Select the supervisor from the dropdown

3. **Enter member data in the table:**
   For each member, enter the following information:

   - **සාමාජික අංකය** (Member Number) - Enter the member's number
   - **පුර්ව සාමාජික අංකය** (Previous Member Number) - If applicable
   - **සාමාන්‍ය දළු** (Normal Leaf Weight) - Enter the total green leaf weight in kilograms
   - **ගෝනි ගණන** (Bag Count) - Number of bags
   - **ගෝනි බර** (Bag Weight) - Total weight of bags in kilograms
   - **පෙට්ටි ගණන** (Box Count) - Number of boxes
   - **පෙට්ටි බර** (Box Weight) - Automatically calculated (3.5 kg per box, rounded up)
   - **රන් දළු** (Gold Leaf Weight) - Weight of gold leaf in kilograms
   - **වතුරට** (Wathurata) - Deduction amount
   - **මොරපුවට** (Morapuwata) - Deduction amount
   - **තැම්බිමට** (Thambimata) - Deduction amount
   - **ප්‍රතික්ෂේපිත** (Rejected) - Rejected weight
   - **මුළු බර** (Total Weight) - Automatically calculated (read-only)

4. **Add more rows:**

   - Click the **Add Row** button to add another member entry
   - Or press **Tab** or **Enter** on the last field of the last row to automatically add a new row

5. **Row actions:**

   - **Clear** - Clears all data in the current row
   - **Remove** - Removes the row (minimum one row must remain)

6. **Save data:**
   - Click **Save All** button to save all entries
   - The system will validate all required fields before saving
   - A success message will appear upon successful save

#### Important Notes:

- **Gold leaf weight cannot exceed normal leaf weight** - The system will show an error if this validation fails
- **Box weight is automatically calculated** - 3.5 kg per box, rounded up
- **Total weight calculation:** Total Weight = Normal Leaf Weight - (Gold Leaf Weight + Bag Weight + Box Weight + Wathurata + Morapuwata + Thambimata + Rejected)
- Use **Tab**, **Enter**, or arrow keys to navigate between fields for faster data entry

---

### 4.2 Green Leaf Reports / දළු වාර්තාව

Generate comprehensive reports for green leaf collection data.

#### Report Types:

1. **Daily Report (D)** - View data for a specific date
2. **Monthly Report (M)** - View data for a specific month
3. **Yearly Report (Y)** - View data for a specific year

#### How to Generate Reports:

1. **Navigate to the module:**

   - Click **දළු බාර ගැනීමේ තොරතුරු** → **දළු වාර්තාව**

2. **Select report type:**

   - Click **D** for Daily, **M** for Monthly, or **Y** for Yearly

3. **Apply filters (optional):**

   - **Factory** - Filter by specific factory (or "All Factories")
   - **Transport Line** - Filter by specific transport line (or "All Lines")
   - **Date/Month/Year** - Select the specific date, month, or year

4. **View the report:**

   - The report will automatically load based on your selections
   - Reports include totals and summaries

5. **Monthly Report Views:**

   - **මාසික දළු ගණන(දෛනික)** - Daily breakdown for the month
   - **මාසික එකතුව** - Monthly totals per member

6. **Yearly Report Views:**

   - **වාර්ෂික එකතුව (මාස අනුව)** - Monthly summary for the year
   - **සාමාජික වාර්ෂික එකතුව** - Yearly totals per member

7. **Print reports:**
   - Click the **Print** button to print the current report
   - The print view is optimized for printing

---

### 4.3 Member Management / සාමාජික කළමනාකරණය

#### Adding a New Member:

1. Navigate to **සාමාජික තොරතුරු** → **සාමාජිකයන්**
2. Click **Add Member** button
3. Fill in all required member information:
   - Personal details (name, NIC, address, etc.)
   - Contact information
   - Bank account details
   - Member number
4. Click **Save** to create the member

#### Editing a Member:

1. Navigate to **සාමාජික තොරතුරු** → **සාමාජිකයන්**
2. Find the member in the list
3. Click **Edit** button next to the member
4. Make necessary changes
5. Click **Save** to update

#### Viewing Member Details:

1. Navigate to **සාමාජික තොරතුරු** → **සාමාජිකයන්**
2. Click **View** button next to the member
3. View comprehensive member information including:
   - Personal details
   - Transaction history
   - Payment records
   - Loan information

---

### 4.4 Payment Management / ගෙවීම් සැකසීම

#### Setting Up Payments:

1. Navigate to **දළු මිල සැකසීම** → **ගෙවීම් සැකසීම**
2. Configure payment components:
   - Additions (bonuses, incentives)
   - Deductions (loans, advances)
   - Rates for green leaf and gold leaf
3. Set up payment slabs if applicable
4. Save configurations

#### Generating Payment Slips:

1. Navigate to **දළු මිල සැකසීම** → **ගෙවීම් පත්**
2. Select the payment period (month/year)
3. Select factory and/or transport line (optional filters)
4. Click **Generate** to create payment slips
5. Review the generated slips
6. Print or export as needed

---

### 4.5 Loan Management / ණය කළමනාකරණය

#### Adding a Loan:

1. Navigate to **ණය සැකසීම** → **ණය**
2. Click **Add Loan** button
3. Select the member
4. Enter loan details:
   - Loan amount
   - Interest rate (if applicable)
   - Repayment terms
   - Start date
5. Click **Save**

#### Viewing Loans:

1. Navigate to **ණය සැකසීම** → **ණය**
2. View all loans in the system
3. Filter by member, date, or status
4. Click on a loan to view details

---

## 5. Keyboard Shortcuts / යතුරු පුවරු කෙටිමං

### In Green Leaf Data Entry:

- **Tab** - Move to next field
- **Shift + Tab** - Move to previous field
- **Enter** - Move to next field (same as Tab)
- **Arrow Up** - Move to same field in previous row
- **Arrow Down** - Move to same field in next row (adds new row if at last row)
- **Arrow Left** - Move to previous field in same row
- **Arrow Right** - Move to next field in same row

**Tip:** These shortcuts make data entry much faster, especially when entering multiple member records.

---

## 6. Troubleshooting / ගැටළු විසඳීම

### Common Issues and Solutions:

#### Issue: Cannot login

**Solution:**

- Verify your username and password
- Check if your account is active
- Contact system administrator if password needs to be reset

#### Issue: "Gold leaf weight cannot exceed green leaf weight" error

**Solution:**

- Check that the gold leaf weight entered is less than or equal to the normal leaf weight
- Verify all weight entries are correct

#### Issue: Transport line not showing in dropdown

**Solution:**

- Ensure a factory is selected first (transport lines are filtered by factory)
- Check if the transport line is assigned to the selected factory

#### Issue: Data not saving

**Solution:**

- Check that all required fields are filled
- Verify your internet connection
- Check for validation errors (red error messages)
- Ensure you have proper permissions

#### Issue: Report showing no data

**Solution:**

- Verify the date/month/year selection
- Check if filters are too restrictive
- Ensure data exists for the selected period

#### Issue: Page not loading

**Solution:**

- Refresh the page (F5 or Ctrl+R)
- Clear browser cache
- Check internet connection
- Try logging out and logging back in

---

## 7. Best Practices / හොඳම පිළිවෙත්

### Data Entry:

1. **Double-check all entries** before saving
2. **Use keyboard shortcuts** for faster data entry
3. **Save frequently** to avoid data loss
4. **Verify calculations** especially for weights and totals

### Reports:

1. **Use filters** to get specific data you need
2. **Export or print** important reports for record keeping
3. **Review totals** to ensure data accuracy

### Security:

1. **Never share your login credentials**
2. **Log out** when finished, especially on shared computers
3. **Report suspicious activity** to administrators

### General:

1. **Keep your browser updated** for best performance
2. **Use supported browsers** (Chrome, Firefox, Edge recommended)
3. **Contact support** if you encounter any issues

---

## 8. Support and Contact / සහාය සහ සම්බන්ධතා

If you need assistance:

1. Contact your system administrator
2. Check this manual for common solutions
3. Report bugs or issues to the development team

---

## Appendix: Field Descriptions / උපග්‍රන්ථය: ක්ෂේත්‍ර විස්තර

### Green Leaf Data Entry Fields:

- **සාමාජික අංකය** (Member Number) - Unique identifier for the member
- **පුර්ව සාමාජික අංකය** (Previous Member Number) - Old member number if changed
- **සාමාන්‍ය දළු** (Normal Leaf Weight) - Total green leaf weight in kg (gross weight before deductions)
- **ගෝනි ගණන** (Bag Count) - Number of bags used
- **ගෝනි බර** (Bag Weight) - Total weight of bags in kg
- **පෙට්ටි ගණන** (Box Count) - Number of boxes used
- **පෙට්ටි බර** (Box Weight) - Automatically calculated (3.5 kg × box count, rounded up)
- **රන් දළු** (Gold Leaf Weight) - Weight of premium gold leaf in kg (deducted from total)
- **වතුරට** (Wathurata) - Deduction for water content
- **මොරපුවට** (Morapuwata) - Deduction for morapuwata
- **තැම්බිමට** (Thambimata) - Deduction for thambimata
- **ප්‍රතික්ෂේපිත** (Rejected) - Weight of rejected/defective leaves
- **මුළු බර** (Total Weight) - Final net weight after all deductions (automatically calculated)

---

**Document Version:** 1.0  
**Last Updated:** 2024  
**System:** Tea Cooperative ERP

---

_This manual is designed to help users effectively use the Tea Cooperative ERP System. For additional support or questions, please contact your system administrator._

