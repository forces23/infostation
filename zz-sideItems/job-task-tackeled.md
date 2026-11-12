# 1. Bulk ticket creation for service now

* problem: our DPMs were give an excel file filed out reaches. the file could be hundres or thoisands of rows. each of these rows needed to be processed by the agents. each ticket needed to be created then assigned then worked.
* solution: i created a batch ticket processor that would allow a admins in the helpdesk portal to upload a excel file and auto create the tickets so the the work is more streamlined and all the agents need to do is work the tickets.
* Technology:
  * AWS Fargate
  * AWS Batch
  * Angular
  * Typescript
  * Liquibase
  * PostreSQL
  * Claude
  * NodeJS
  * USWDS - gov styles

# 2. Implmeneted Text editor on UI

* Problem: admins would needed to write html in a text form filed to be able to embed links and change colors of announcements for the home page of the helpdesk portal.
* Solution: I implemented Quill text editor that has built in functionality to embed links, format text, and more. Doing this allowed this admins to have a more user friendly way of creating announcements. Since the Quill text editor worked so well i inplmented it across all the areas of the admin portal that needed the functionalities it provided.
* Technology:
  * Angular
  * Typescript
  * Liquibase
  * Quill
  * Claude
  * NodeJS
  * USWDS - gov styles
