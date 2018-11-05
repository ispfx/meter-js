## meter-js

This is a simple meter/guage web part built in SharePoint Framework (SPFx) using the pure JavaScript SPFx template.

### Building Your Own Web Part

This solution is intended to accompany [Introduction to SharePoint Framework](https://sharepointfx.io/), an online educational course to help you learn modern SharePoint Framework development techniques. Learn how to build your own meter web part by following the lessons found at [sharepointfx.io](https://sharepointfx.io/).

### Getting Started

```bash
# Install dependencies
npm i

# Run the local workbench
gulp serve
```

### Deploying to SharePoint

```bash
# Bundle the solution
gulp bundle --ship

# Package the solution
#  - This creates a sharepoint/solution/meter.sppkg file
gulp package-solution --ship
```

Once you have a `meter.sppkg` file, you can deploy this to your SharePoint environment's [App Catalog](https://docs.microsoft.com/en-us/sharepoint/use-app-catalog). See the **Deploying and Updating Solutions** lesson for more information on solution deployment.
