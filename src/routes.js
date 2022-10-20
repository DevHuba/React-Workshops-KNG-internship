/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import Index from "views/Index.js";
import { Profile } from "pages/user-profile";
// import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";
// import Tables from "views/examples/Tables.js";
import { Icons } from "pages/icons";
// import Employees from "views/examples/employees/Employees";
// import Groups from "views/examples/Groups";
// import Documents from "views/examples/Documents";
import { WorkOrdersPage } from "pages/work-orders";
import { WORK_ORDERS_PAGE } from "routes.const";
import { MaintenancePage } from "pages/maintenance";
import { MAINTENANCE_PAGE } from "routes.const";
import { ANALYTICS_PAGE } from "routes.const";
import { AnalyticsPage } from "pages/analytics";
import { RequestsPage } from "pages/requests/Requests.page";
import { REQUESTS_PAGE } from "routes.const";
import { LOCATIONS_PAGE } from "routes.const";
import { LocationsPage } from "pages/locations";
import { AssetsPage } from "pages/assets";
import { ASSETS_PAGE } from "routes.const";
import { PARTS_INVENTORY_PAGE } from "routes.const";
import { PartsInventoryPage } from "pages/parts-inventory";
import { PURCHASE_ORDERS_PAGE } from "routes.const";
import { PurchaseOrdersPage } from "pages/purchase-orders";
import { METERS_PAGE } from "routes.const";
import { MetersPage } from "pages/meters";
import { PEOPLE_TEAMS_PAGE } from "routes.const";
import { PeopleAndTeamsPage } from "pages/people-teams";
import { VENDORS_CUSTOMERS_PAGE } from "routes.const";
import { VendorsCustomersPage } from "pages/vendors-customers";
import { COMPANY_ROUTE } from "routes.const";
import { CompanyPage } from "pages/company";

var routes = [
  {
    id: "work-orders",
    path: `${WORK_ORDERS_PAGE}`,
    name: "Work Orders",
    icon: "ni ni-single-copy-04 text-info",
    component: WorkOrdersPage,
    layout: "/admin",
  },
  {
    id: "maintenance",
    path: `${MAINTENANCE_PAGE}`,
    name: "Preventive Maintenance",
    icon: "ni ni-building text-info",
    component: MaintenancePage,
    layout: "/admin",
  },
  {
    id: "analytics",
    path: `${ANALYTICS_PAGE}`,
    name: "Analytics",
    icon: "ni ni-sound-wave text-info",
    component: AnalyticsPage,
    layout: "/admin",
  },
  {
    id: "requests",
    path: `${REQUESTS_PAGE}`,
    name: "Requests",
    icon: "ni ni-send text-info",
    component: RequestsPage,
    layout: "/admin",
  },
  {
    id: "locations",
    path: `${LOCATIONS_PAGE}`,
    name: "Locations",
    icon: "ni ni-square-pin text-info",
    component: LocationsPage,
    layout: "/admin",
  },
  {
    id: "assets",
    path: `${ASSETS_PAGE}`,
    name: "Assets",
    icon: "ni ni-app text-info",
    component: AssetsPage,
    layout: "/admin",
  },
  {
    id: "parts-inventory",
    path: `${PARTS_INVENTORY_PAGE}`,
    name: "Parts/Inventory",
    icon: "ni ni-key-25 text-info",
    component: PartsInventoryPage,
    layout: "/admin",
  },
  {
    id: "purchase-orders",
    path: `${PURCHASE_ORDERS_PAGE}`,
    name: "Purchase Orders",
    icon: "ni ni-money-coins text-info",
    component: PurchaseOrdersPage,
    layout: "/admin",
  },
  {
    id: "meters",
    path: `${METERS_PAGE}`,
    name: "Meters",
    icon: "ni ni-user-run text-info",
    component: MetersPage,
    layout: "/admin",
  },
  {
    id: "people-teams",
    path: `${PEOPLE_TEAMS_PAGE}`,
    name: "People & Teams",
    icon: "ni ni-badge text-info",
    component: PeopleAndTeamsPage,
    layout: "/admin",
  },
  {
    id: "vendors-customers",
    path: `${VENDORS_CUSTOMERS_PAGE}`,
    name: "Vendors & Customers",
    icon: "ni ni-circle-08 text-info",
    component: VendorsCustomersPage,
    layout: "/admin",
  },
  {
    id: "company",
    path: `${COMPANY_ROUTE}`,
    name: "Company",
    icon: "ni ni-briefcase-24 text-primary",
    component: CompanyPage,
    layout: "/admin",
  },
  {
    id: "icons",
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-info",
    component: Icons,
    layout: "/admin",
  },
  {
    id: "user-profile",
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-primary",
    component: Profile,
    layout: "/admin",
  },

];
export default routes;
