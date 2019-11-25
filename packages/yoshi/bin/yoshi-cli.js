#!/usr/bin/env node

const config = require('yoshi-config');
const { inTeamCity } = require('yoshi-helpers/queries');
const { collectData } = require('yoshi-common/build/telemetry');

if (inTeamCity()) {
  collectData();
}

if (config.projectType === 'app') {
  require('yoshi-flow-app/build/bin/yoshi-app');
} else if (config.experimentalMonorepo) {
  require('yoshi-flow-monorepo/build/bin/yoshi-monorepo');
} else {
  require('yoshi-flow-legacy/bin/yoshi-legacy');
}
