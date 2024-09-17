import pandas as pd
import geojson

# Load the CSV file
df = pd.read_csv('coal_mines.csv')

# Create GeoJSON features
features = []
for _, row in df.iterrows():
    point = geojson.Point((row['lon'], row['lat']))
    feature = geojson.Feature(geometry=point, properties={"name": row['name'], "production": row['production']})
    features.append(feature)

# Create GeoJSON FeatureCollection
feature_collection = geojson.FeatureCollection(features)

# Save GeoJSON to a file
with open('coal_mines.geojson', 'w') as f:
    geojson.dump(feature_collection, f)
