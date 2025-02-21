Here's the documentation for the provided code in markdown format, enclosed in response tags:

# Tempus Model List Page Test Steps

## Verify Recently Created Tempus Model

```gherkin
Then('ui: Verify if recently created Tempus model is displayed in Model list page', async () => {
  // Implementation details
});
```

This step verifies if the recently created Tempus model is displayed in the Model list page.

* **Action**: Checks for the presence of the specific model name in the list.

* **Assertion**: Ensures that the model is visible on the page.

* **Error Message**: Displays if the model is not found in the list.

## Click Create Model Button

```gherkin
Then('ui: Click on Create model button on Model list page', async () => {
  // Implementation details
});
```

This step clicks on the Create model button on the Model list page.

* **Action**: Clicks the Create Model button.

## Soft Assert Model Not Displayed

```gherkin
Then('ui: Softassert if recently created Tempus model is not displayed in Model list page', async () => {
  // Implementation details
});
```

This step performs a soft assertion to check if the recently created Tempus model is not displayed in the Model list page.

* **Action**: Checks for the absence of the specific model name in the list.

* **Soft Assertion**: Verifies that the model is not visible on the page.

* **Error Message**: Displays if the model is still found in the list.
