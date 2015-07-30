for i in *.jpg
do
djpeg $i | pamscale -xyfit 189 150 | cjpeg -optimize -progressive -quality 80 > $i-tn.jpg
echo $i processed
done
