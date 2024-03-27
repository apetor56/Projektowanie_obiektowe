program paradygmaty;

uses SysUtils, Math;

const
	arraySize: Integer = 50;
	max: Integer = 101;
	rangeFix: Integer = 1;
var
	arrayIndex: Integer;
	randomNumbers : array of Integer;

procedure generateRandomNumbers;
begin
	SetLength(randomNumbers, arraySize);
	Randomize;

	for arrayIndex := Low(randomNumbers) to High(randomNumbers) do
	begin
		randomNumbers[arrayIndex] := random(max);
	end;
end;

procedure sort(var data: array of Integer);
var i, j, temp: Integer;
begin
	for i := Low(randomNumbers) to High(data) do
		begin
			for j := Low(randomNumbers) to High(data) - i - rangeFix do
				begin
					if data[j] > data[j + 1] then
					begin
						temp := data[j];
						data[j] := data[j + 1];
						data[j + 1] := temp;
					end;
				end;
		end;
end;

begin
	generateRandomNumbers;
	sort(randomNumbers);

	for arrayIndex := Low(randomNumbers) to High(randomNumbers) do
	begin
		Writeln(randomNumbers[arrayIndex]);
	end;
end.

