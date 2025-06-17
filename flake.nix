{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs =
    {
      nixpkgs,
      ...
    }:
    let
      inherit (nixpkgs) lib;
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

      packages.${system}.default = pkgs.buildNpmPackage {
        name = "tcc-page-package";
        src = pkgs.nix-gitignore.gitignoreSourcePure [ ./.gitignore ] (lib.cleanSource ./.);
        npmDepsHash = "sha256-ijj57Sv3Txr0UfoC/N0TbLEr1qbZ9yDtvHUR9aEsRus=";
        installPhase = ''
          runHook preInstall
          mv dist $out
          runHook postInstall
        '';
      };
    };
}
