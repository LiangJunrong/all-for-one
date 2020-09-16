export interface TerminalCommand {
  command: string;
  auto: boolean;
  preserve: boolean;
  name?: string;
  group?: string;
}