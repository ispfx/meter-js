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
  title: string;
  description: string;
  percentage: number;
}

export default class MeterWebPart extends BaseClientSideWebPart<IMeterWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.meter }">
        <h1>${this.properties.title}</h1>
        <p>${this.properties.description}</p>
        <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
          <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
          <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#eee" stroke-width="4"></circle>
          <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#47c3f0" stroke-width="4" stroke-dasharray="${this.properties.percentage} ${100 - this.properties.percentage}" stroke-dashoffset="25"></circle>
          <text class="donut-number" x="50%" y="50%" text-anchor="middle">${this.properties.percentage}%</text>
        </svg>
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
                PropertyPaneTextField('title', {
                  label: 'Title'
                }),
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('percentage', {
                  label: 'Percentage'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
