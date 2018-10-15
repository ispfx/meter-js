import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './MeterWebPart.module.scss';
import * as strings from 'MeterWebPartStrings';

export interface IMeterWebPartProps {
  description: string;
}

export default class MeterWebPart extends BaseClientSideWebPart<IMeterWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.meter }">
        <h1>Meter Web Part</h1>
        <p>Hello.</p>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
