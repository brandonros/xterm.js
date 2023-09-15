/**
 * Copyright (c) 2017 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { Terminal, ITerminalAddon } from '@daiyam/xterm-tab';

declare module '@daiyam/xterm-tab-addon-unicode11' {
  export class Unicode11Addon implements ITerminalAddon {
    constructor();
    public activate(terminal: Terminal): void;
    public dispose(): void;
  }
}
