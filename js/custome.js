"use strict";

// Form component map
const components = {
  text: {
    containerOpen: '<div class="form-group">',
    labelOpen: '<label class="form-label-sm">',
    labelClose: '</label>',
    open: '<input type="text" class="form-control"',
    placeholderOpen: ' placeholder="',
    placeholderClose: '"',
    close: '>',
    containerClose: '</div>'
  },
  textarea: {
    containerOpen: '<div class="form-group">',
    labelOpen: '<label class="form-label-sm">',
    labelClose: '</label>',
    open: '<textarea class="form-control"',
    placeholderOpen: ' placeholder="',
    placeholderClose: '"',
    close: '></textarea>',
    containerClose: '</div>'
  },
  checkbox: {
    containerOpen: '<div class="form-check">',
    open: '<input class="form-check-input " type="checkbox"',
    close: '>',
    labelOpen: '<label class="form-check-label form-label-sm">',
    labelClose: '</label>',
    containerClose: '</div>'
  },
  radio: {
    containerOpen: '<div class="form-check">',
    open: '<input class="form-check-input " type="radio" name="radios"',
    close: '>',
    labelOpen: '<label class="form-check-label form-label-sm">',
    labelClose: '</label>',
    containerClose: '</div>'
  },
  select: {
    containerOpen: '<div class="form-group">',
    labelOpen: '<label class="form-label-sm">',
    labelClose: '</label>',
    open: '<select class="form-control">',
    openMultiple: '<select multiple class="form-control">',
    optionOpen: '<option>',
    optionClose: '</option>',
    close: '</select>',
    containerClose: '</div>'
  },
  fileinput: {
    containerOpen: '<div class="form-group">',
    labelOpen: '<label class="form-label-sm">',
    labelClose: '</label>',
    open: '<input type="file" class="form-control-file"',
    close: '>',
    containerClose: '</div>'
  },
  submit: {
    containerOpen: '<div class="form-group">',
    open: '<button type="submit" class="btn btn-primary">',
    close: '</button>',
    containerClose: '</div>'
  },
  cancel: {
    containerOpen: '<div class="form-group">',
    open: '<button type="submit" class="btn btn-danger">',
    close: '</button>',
    containerClose: '</div>'
  }
};
/* Text field builder
 * Supports dynamic label and placeholder text
 */

function buildTextField(field) {
  // Set up the new field
  let textField = components.text.containerOpen; // Add the label if one is specified

  if (field.label) {
    textField += components.text.labelOpen + field.label + components.text.labelClose;
  }

  textField += components.text.open; // Add the placeholder if one is specified

  if (field.placeholder) {
    textField += components.text.placeholderOpen + field.placeholder + components.text.placeholderClose;
  } // Close and return the new field


  textField += components.text.close;
  textField += components.text.containerClose;
  return textField;
}
/* Textarea field builder
 * Supports dynamic label and placeholder text
 */


function buildTextAreaField(field) {
  // Set up the new field
  let textAreaField = components.textarea.containerOpen; // Add the label if one is specified

  if (field.label) {
    textAreaField += components.textarea.labelOpen + field.label + components.textarea.labelClose;
  }

  textAreaField += components.textarea.open; // Add the placeholder if one is specified

  if (field.placeholder) {
    textAreaField += components.textarea.placeholderOpen + field.placeholder + components.textarea.placeholderClose;
  } // Close and return the new field


  textAreaField += components.textarea.close;
  textAreaField += components.textarea.containerClose;
  return textAreaField;
}
/* Checkbox field builder
 * Supports dynamic label text
 */


function buildCheckboxField(field) {
  // Set up the new field
  let checkboxField = components.checkbox.containerOpen;
  checkboxField += components.checkbox.open;
  checkboxField += components.checkbox.close; // Add the label if one is specified

  if (field.label) {
    checkboxField += components.checkbox.labelOpen + field.label + components.checkbox.labelClose;
  } // Close and return the new field


  checkboxField += components.checkbox.containerClose;
  return checkboxField;
}
/* Radio field builder
 * Supports dynamic label text
 */


function buildRadioField(field) {
  // Set up the new field
  let radioField = components.radio.containerOpen;
  radioField += components.radio.open;
  radioField += components.radio.close; // Add the label if one is specified

  if (field.label) {
    radioField += components.radio.labelOpen + field.label + components.radio.labelClose;
  } // Close and return the new field


  radioField += components.radio.containerClose;
  return radioField;
}
/* Select menu field builder
 * Supports an array of options and multiple select
 */


function buildSelectField(field) {
  // Set up the new field
  let selectField = components.select.containerOpen; // Add the label if one is specified

  if (field.label) {
    selectField += components.select.labelOpen + field.label + components.select.labelClose;
  } // Add the element
  // For multiple select, use the alternate open snippet


  if (field.type === 'multipleselect') {
    selectField += components.select.openMultiple;
  } else {
    selectField += components.select.open;
  } // Add all options


  if (field.options) {
    for (let i = 0; i < field.options.length; i++) {
      selectField += components.select.optionOpen + field.options[i] + components.select.optionClose;
    }
  }

  selectField += components.select.close; // Close and return the new field

  selectField += components.select.containerClose;
  return selectField;
}
/* File Input field builder
 */


function buildFileInputField(field) {
  // Set up the new field
  let fileField = components.fileinput.containerOpen; // Add the label if one is specified

  if (field.label) {
    fileField += components.fileinput.labelOpen + field.label + components.fileinput.labelClose;
  }

  fileField += components.fileinput.open; // Add the placeholder if one is specified

  if (field.placeholder) {
    fileField += components.fileinput.placeholderOpen + field.placeholder + components.fileinput.placeholderClose;
  } // Close and return the new field


  fileField += components.fileinput.close;
  fileField += components.fileinput.containerClose;
  return fileField;
}
/* Return an HTML form built from the component map 
 */

function buildSubmitField(field) {
  let submitBtn = components.submit.containerOpen;
  submitBtn += components.submit.open + field.text; // Add the text of button here
  submitBtn += components.submit.close;
  submitBtn += components.submit.containerClose; // Close and return the new button
  return submitBtn;
}
/* Return an HTML form built from the component map 
 */


function buildCancelField(field) {
  let cancelBtn = components.cancel.containerOpen;
  cancelBtn += components.cancel.open + field.text; // Add the text of button here
  cancelBtn += components.cancel.close;
  cancelBtn += components.cancel.containerClose; // Close and return the new button
  return cancelBtn;
}
/* Return an HTML form built from the component map 
 */



function buildJSONForm(json) {
  // Declare the form
  let form = '<form>'; // Create an array of the fields in json

  let formFields = Object.getOwnPropertyNames(json); // Search input keys against the component map

  for (let i = 0; i < formFields.length; i++) {
    let currentField = json[formFields[i]]; // Field construction router

    switch (currentField.type) {
      case 'text':
        form += buildTextField(currentField);
        break;

      case 'textarea':
        form += buildTextAreaField(currentField);
        break;

      case 'checkbox':
        form += buildCheckboxField(currentField);
        break;

      case 'radio':
        form += buildRadioField(currentField);
        break;

      case 'select':
      case 'multipleselect':
        form += buildSelectField(currentField);
        break;

      case 'fileinput':
        form += buildFileInputField(currentField);
        break;
      case 'submit':
        form += buildSubmitField(currentField);
        break;

      case 'cancel':
        form += buildCancelField(currentField);
        break;

      default:
        alert("The " + currentField.type + " field type is not currently supported. Please try with a different field.");
        break;
    }
  }

  form += '</form>';
  return form;
}
/* Convert raw JSON input into an HTML form and set the destination 
 * element's content to the new form
 */


function drawForm(jsonInput, destinationId) {
  // Validate and parse the JSON string
  try {
    var input = JSON.parse(jsonInput);
  } catch (e) {
    alert('Your submission resulted in this error:\n\n' + e + '\n\nPlease enter valid JSON and try again.');
  } // Use the input string to create a new form using buildJSONForm


  let resultForm = buildJSONForm(input); // Present the new form in the requested destination

  $(destinationId).html(resultForm);
}