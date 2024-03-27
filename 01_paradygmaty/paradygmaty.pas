program paradygmaty;

uses SysUtils, Math;

const rangeFix: Integer = 1;

var 
	arrayIndex: Integer;
	randomNumbers: array of Integer;

procedure generateRandomNumbers(const first, last, size: Integer);
var offset: Integer;
begin
	if size <= 0 then
	begin
		WriteLn('array size must be greater than 0');
		exit;
	end;

	if first > last then
	begin
		WriteLn('last index must be greater than first');
		exit;
	end;
	
	SetLength(randomNumbers, size);
	Randomize;
	offset := last - first;

	for arrayIndex := Low(randomNumbers) to High(randomNumbers) do
	begin
		randomNumbers[arrayIndex] := random(offset + rangeFix) + first;
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
	generateRandomNumbers(30, 80, 100);
	sort(randomNumbers);	

	for arrayIndex := Low(randomNumbers) to High(randomNumbers) do
	begin
		Writeln(randomNumbers[arrayIndex]);
	end;
end.

