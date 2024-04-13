unit paradygmaty;

interface

procedure generateRandomNumbers(const first, last: Integer; var outputData: array of Integer);
procedure sort(var data: array of Integer);

implementation

uses SysUtils, Math;

const rangeFix: Integer = 1;

var 
	arrayIndex: Integer;
	randomNumbers: array of Integer;

procedure generateRandomNumbers(const first, last: Integer; var outputData: array of Integer);
var offset: Integer;
begin
	if first > last then
	begin
		WriteLn('last index must be greater than first');
		exit;
	end;
	
	Randomize;
	offset := last - first;

	for arrayIndex := Low(outputData) to High(outputData) do
	begin
		outputData[arrayIndex] := random(offset + rangeFix) + first;
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


end.

