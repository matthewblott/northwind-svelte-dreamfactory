import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { g as goto, r as reporter } from "../../../../../chunks/reporter.js";
import { validateSchema } from "@felte/validator-zod";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import { E as Employee } from "../../../../../chunks/employee.js";
import { E as EmployeeSchema, a as EmployeeRegions } from "../../../../../chunks/EmployeeRegions.js";
import { T as TextField } from "../../../../../chunks/TextField.js";
import { D as DateField, E as Employees } from "../../../../../chunks/Employees.js";
import { V as Validation } from "../../../../../chunks/Validation.js";
import { c as createForm } from "../../../../../chunks/create-form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createForm({
    async onSubmit(values) {
      delete values.EmployeeId;
      const id = await Employee.create(values);
      const url = `/employees/${id}`;
      goto(url);
    },
    validate: validateSchema(EmployeeSchema),
    extend: [reporter]
  });
  return `<h1>Employee</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})}Save</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"EmployeeId"}">Id</label>
		<input id="${"EmployeeId"}" value="${"[New]"}" readonly>
		<input type="${"number"}" name="${"EmployeeId"}" value="${"0"}" style="${"display: none;"}">

		${validate_component(TextField, "TextField").$$render($$result, { name: "Title" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "TitleOfCourtesy" }, {}, {})}
		${validate_component(DateField, "DateField").$$render($$result, { name: "BirthDate" }, {}, {})}

		${validate_component(TextField, "TextField").$$render($$result, { name: "FirstName" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "LastName" }, {}, {})}

		${validate_component(DateField, "DateField").$$render($$result, { name: "HireDate" }, {}, {})}

		${validate_component(TextField, "TextField").$$render($$result, { name: "Address" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "City" }, {}, {})}
		${validate_component(EmployeeRegions, "EmployeeRegions").$$render($$result, { name: "Region" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "PostalCode" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "Country" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "HomePhone" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "Extension" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "Photo" }, {}, {})}

		<label for="${"Notes"}">Notes</label>
		<textarea name="${"Notes"}" id="${"Notes"}" rows="${"5"}"></textarea>
		${validate_component(Validation, "Validation").$$render($$result, { name: "Notes" }, {}, {})}

		${validate_component(Employees, "Employees").$$render($$result, { name: "ReportsTo" }, {}, {})}

		${validate_component(TextField, "TextField").$$render($$result, { name: "PhotoPath" }, {}, {})}</fieldset></form>`;
});
export {
  Page as default
};
