export const run = async (cmd, args) => {
  const p = new Deno.Command(cmd, { args, stdin: "null", stdout: "inherit", stderr: "inherit" }).spawn();
  const status = await p.status;
  if (!status.success) throw new Error(`${cmd} exited with code ${status.code}`);
};
