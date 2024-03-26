program paradygmaty;

uses
	SysUtils, Math;

const
	arraySize: Integer = 50;
	max: Integer = 101;
var
	arrayIndex: Integer;
	randomNumbers : array of Integer;

procedure generateRandomNumbers;
begin
	SetLength(randomNumbers, arraySize);
	Randomize;

	for arrayIndex := 0 to High(randomNumbers) do
	begin
		randomNumbers[arrayIndex] := random(max);
	end;
end;

begin
	generateRandomNumbers;
	for arrayIndex := 0 to High(randomNumbers) do
	begin
		Writeln(randomNumbers[arrayIndex]);
	end;
end.

