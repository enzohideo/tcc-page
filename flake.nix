{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs =
    {
      nixpkgs,
      ...
    }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        name = "tcc-page-devshell";
        buildInputs = with pkgs; [
          nodejs
          typescript-language-server
          vscode-langservers-extracted
        ];
      };
    };
}
