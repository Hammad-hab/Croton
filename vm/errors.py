from rich.console import Console

console = Console()
def throwError(prosecutor, error):
    console.print(f"[{prosecutor}]:\n\t{error}", style="red on black")
    ...