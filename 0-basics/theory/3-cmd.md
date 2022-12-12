## Theory

-**ls**: lists everything -**cd**: moving around th dirs -**mv**: move files -**rm**: remove files && directories -**mkdir**: create directories -**rmdir**: remove single directory -**cp**: copy files -**find**: -**&&**: compose commands -**clear**: clean

### Extra

- **cat**: output files
- **pwd**: show directory
- **grep**: search for patterns in files
- **ln**: create symbolic links
- **|**: it is used to pipe, or transfer, the standard output from the command on its left into the standard input of the command on its right.

## Practice

```shell
## Print hello world
echo hello world

## Print the current workinng directoy
pwd

## List all the files
ls

## Print the contents of the file
cat filename
tail filename

## Print las n lines
tail -n filenama

## Create empy file
nul > take-the-command-challenge

## Create a directory named tmp/files in the current working directory
mkdir -p tmp/files

## Copy the file named take-the-command-challenge to the directory tmp/files
cp take-the-command-challenge tmp/files

## Move the file named take-the-command-challenge to the directory tmp/files
mv take-the-command-challenge tmp/files

## Create a symbolic link named take-the-command-challenge that points to the file tmp/files/take-the-command-challenge.
ln -s myfile_dir mylink_name

## Delete all of the files in this challenge directory including all subdirectories and their contents.
rm -rf * .* | rm -rf {,.[!.],..?}* | find . -mindepth 1 -delete

## There are files in this challenge with different file extensions. Remove all files with the .doc extension recursively in the current working directory.
rm **/*.doc

## There is a file named access.log in the current working directory. Print all lines in this file that contains the string "GET".
cat access.log | grep GET

## Print all files in the current directory, one per line (not the path, just the filename) that contain the string "500".
find . | grep -rl 500

## Print the relative file paths, one path per line for all filenames that start with "access.log" in the current directory.
find . -name "access.log*"

## Print all matching lines (without the filename or the file path) in all files under the current directory that start with "access.log" that contain the string "500".
find . -name "access.log*" | xargs grep -h 500


## Extract all IP addresses from files that start with "access.log" printing one IP address per line.
find . -name "access.log*" | xargs grep -Eo '^[^ ]+'

## Count the number of files in the current working directory. Print the number of files as a single integer.
ls -R | wc -l

```

## Project

cd thecmdchallenge
ls \*
lr -r
clear
cd dir/.../ && cat trophy.txt
mkdir -p the-most-funny/not-that-funny  
cp the-mostboring-text.txt ./lol.txt  
mv funcode/kids.jpg funcode/images/hello/  
rm -rf small-name
cat the-ultimate-joke.txt
