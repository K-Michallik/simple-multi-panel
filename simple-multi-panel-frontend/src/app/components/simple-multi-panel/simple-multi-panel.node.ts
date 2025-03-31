import { ApplicationNode } from '@universal-robots/contribution-api';

export interface SimpleMultiPanelNode extends ApplicationNode {
  type: string;
  version: string;
}
