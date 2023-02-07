aws s3 cp src/index.html s3://selfpromotion-tomotom/index.html
aws s3 cp dist/output.css s3://selfpromotion-tomotom/dist/output.css

npx tailwindcss -i ./src/input.css -o ./dist/output.css