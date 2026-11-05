import { c as defineEventHandler } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';

const index = defineEventHandler((event) => {
  return { status: "OK" };
});

export { index as default };
//# sourceMappingURL=index.mjs.map
