import csv
import numpy as np
import matplotlib.pyplot as plt
from sklearn import manifold
from scipy.spatial import distance
from sklearn.manifold import TSNE
import csv
import json

exampleFile = open('sample2000.csv')
exampleReader = csv.reader(exampleFile)
exampleData = list(exampleReader)

dst=[]
dstMatrix=[]

for i in range(len(exampleData)):
	for j in range(len(exampleData)):
	    x=map(float,exampleData[i])
	    y=map(float,exampleData[j])
	    length=distance.euclidean(x,y)
	    dst.append(round(length,7))
	    #print dst
	dstMatrix.append(dst)
	dst=[]
#print dstMatrix


X = np.array(dstMatrix)
model = TSNE(n_components=2, random_state=0)
np.set_printoptions(suppress=True)
coords = model.fit_transform(X) 

exampleFile = open('sample_id1.csv')
exampleReader = csv.reader(exampleFile)
exampleData = list(exampleReader)

outputFile = open('position.csv', 'w')
outputWriter = csv.writer(outputFile)
outputWriter.writerow(['user_id','x','y'])



j=0
for i in range(1,len(exampleData)):
	#ID = map(string,exampleData[i])
	outputWriter.writerow([exampleData[i][0],coords[j][0],coords[j][1]])
	j=j+1
	
outputFile.close()


#plt.subplots_adjust(bottom = 0.1)
#plt.scatter(coords[:,0],coords[:,1],alpha=0.8)
#plt.show()