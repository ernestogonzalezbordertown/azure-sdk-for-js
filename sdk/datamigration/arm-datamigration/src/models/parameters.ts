/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const acceptLanguage: coreHttp.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion: coreHttp.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const deleteRunningTasks: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "deleteRunningTasks"
  ],
  mapper: {
    serializedName: "deleteRunningTasks",
    type: {
      name: "Boolean"
    }
  }
};
export const expand: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};
export const fileName: coreHttp.OperationURLParameter = {
  parameterPath: "fileName",
  mapper: {
    required: true,
    serializedName: "fileName",
    type: {
      name: "String"
    }
  }
};
export const groupName: coreHttp.OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    required: true,
    serializedName: "groupName",
    type: {
      name: "String"
    }
  }
};
export const location: coreHttp.OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    required: true,
    serializedName: "location",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: coreHttp.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const projectName: coreHttp.OperationURLParameter = {
  parameterPath: "projectName",
  mapper: {
    required: true,
    serializedName: "projectName",
    type: {
      name: "String"
    }
  }
};
export const serviceName: coreHttp.OperationURLParameter = {
  parameterPath: "serviceName",
  mapper: {
    required: true,
    serializedName: "serviceName",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: coreHttp.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const taskName: coreHttp.OperationURLParameter = {
  parameterPath: "taskName",
  mapper: {
    required: true,
    serializedName: "taskName",
    type: {
      name: "String"
    }
  }
};
export const taskType: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "taskType"
  ],
  mapper: {
    serializedName: "taskType",
    type: {
      name: "String"
    }
  }
};