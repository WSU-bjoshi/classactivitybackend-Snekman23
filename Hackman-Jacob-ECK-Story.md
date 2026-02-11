6. API Endpoints
7. User Flow

# Client & Project Proposal

**Assignment Phase:** Project Details
**Due:** February 11, 2026 11:59 PM
**Name:** Jacob Hackman

### 1. Client Profile

Description:

- Who: Wright State University, CaTS Help Desk
- What: An extension to the current equipment checkout system
- Where: Kiosks located at each Help Desk front office

The CaTS Help Desk is a help desk service provided by Wright State University. While their main goal is to provide computing resources, assistance, and direction to Wright State University’s faculty, staff, and students, they also offer many other related services. With the amount of services the Help Desk provides, there is times when they are not able to meet the needs of the clients due to the amount of clients requesting help. During starts of the semester, midterms, and finals week, it is not uncommon for a line to extend down the hall for clients waiting to be helped. With an emphasis on helping clients as thoroughly as possible, the Help Desk pride's itself with helping every client quickly, efficently, and not abandoning any clients. The Help Desk has set a new goal this year to have no abandoned clients, meaning all clients that come to the Helpdesk and wait in queue/line are helped and no clients leave the line/queue because of long wait times. The Help Desk is currently reaching out to the Web Team to help develop a self service kiosk to allow client's to fill out requests theirself to increase the speed clients are helped at. The following document details the proposed backend that will be used in the creation of this project.

---

### 2. Previous Proposal

Around 5 months ago, a proposal was submitted to revamp the current system. This propasal was eventualy rejected since it would be unable to interface with the equipment managment system. After further communication between the ITSM team and the Web Dev team, we have came to a conclusion that it is time for a full replacement of this system including a complete rebuild of the database system and the backend. This overhaul will require a new data model that would respect the system as well as user roles, API endpoints, and built in a way to allow the front end to be updated without extensive overhaul to the backend and vice versa.

---

### 3. Purpose & Goals

The proposed site is a rebuild on the Equipment Checkout System which was originally built by the CaTS ITSM team. The website will be availble on select kiosks and designed to allow faculty and staff to walk up to the kiosk and fill out the Equipment Checkout Form themself. The current design is limited in a way that only Help Desk employees can put in the requests to check out equipment and only 1 piece of equipment can be requested at a time. To checkout more than one piece of equipment with the current design, a completely new request must be filled. The proposed design is a storefront-like design in which a client can select multiple pieces of equipment and select the dates they can be requested for. This way by the time the faculty/staff member reaches a Help Desk employee, they will have the forms completely filled out and the employee will only need to spend time grabbing the correct equipment and handing them to the client rather than spending the extra time gathering the required details such as equipment type, client's name, date, class, etc. The end goal here is to minimalize the time it takes acquiring information from the client and prioritize staff and faculty during high volume hours. The client should be able to walk up to a kiosk, select each piece of equipment they require and the time/dates they need the equipment for, and then submit this list of equipment so that an employee can gather the equipment for them.

---

### 4. User Roles

Admins: Admin accounts will have full access to all databases. They will be the only users avaible to create and delete users from the checkout system. They will have access to manually adjust every table that is available in the database. They will have access to create and delete equipment items from the system.

Help Desk: Help Desk accounts will have the access to view all checkouts, users, and items. They will be able to create and delete equipment items from the system. They will be able to toggle equipment through the different statuses and manually update their status.

Users: User accounts can only view checkouts associated with them and view their user profile. They can create checkout requests to request equipment items.

---

### 5. Data Model

Equipment:

- ID (ITM)
- Title
- Description
- Status (Checked out, returned, disabled)

User:

- ID (User)
- School ID
- Name
- Affiliation
- Role (Admin, Help Desk, User)
- Item Checkouts

Checkout:

- ID (ECK)
- Original request ID (REQ)
- Date Approved
- Released Start Date
- Anticipated Return Date
- Status (Checked out, returned, canceled, scheduled)

Requested Checkout:

- ID (REQ)
- UserID requested
- Equipment requested
- Date Created
- Expected Start Date
- Expected Return Date
- Status (Approved, Denied, Canceled)
- Modified By (Admin/Helpdesk ID)

(Note this is not a final draft of the anticipated database.)

---

### 6. Anticipated API calls

GET /user - Returns all users
POST /user - Creates a new user
GET /user/:id - Return that specific user
PATCH /user/:id - Update user information
DELETE /user/:id - Delete specific user

GET /itm- Returns all equipment items
POST /itm - Creates a new equipment item
GET /itm/:id - Return that specific equipment item
PATCH /itm/:id - Update equipment item information
DELETE /itm/:id - Delete specific equipment item
PATCH /itm/:id/status - Update equipment status


GET /req - Returns all checkout request
POST /req - Creates a new checkout request
GET /req/:id - Return that specific checkout request
PATCH /req/:id - Update checkout request information
DELETE /req/:id - Delete specific checkout request
PATCH /req/:id/status - Update checkout request status 

GET /eck - Returns all approved checkouts 
POST /eck - Creates a new approved checkout 
GET /eck/:id - Return that specific approved checkout 
PATCH /eck/:id - Update approved checkout information
DELETE /eck/:id - Delete specific approvedcheckout 
PATCH /eck/:id/status - Update approved checkout status 


### 7. User Storys

> “A staff member lands on the homepage, browses through the most common equipment checkouts, adds two items to their cart, then uses the checkout form to complete a requisition.” (GET /itm/:id, POST /eck)

> “The Admin realizes there was a few users that were added into the system incorrectly and their information was fully corrupted. The admin deletes the broken users and manually creates them.” (GET /user, DELETE /user/:id, POST /user)

> “The help desk staff is asked if a certain equipment is avaible to be checked out. They are also asked if the checkout the user made went through. The staff member search for that equipment and see if it's avaible. They also search for the specified ticket that the user has and look for the status of the ticket.” (GET /itm/:id, GET /req/:id, GET /eck/:id)

> “The Help Desk manager would like to know how many checkouts have been placed as well as what requests have been approved. He searches for the list of all selected equipment checkout.” (GET /req, GET /eck)

> “The Help desk gives out a laptop to a staff member after they requested the device. The item is then marked as checked out.” (POST /req, PATCH /req/:id/status)

---