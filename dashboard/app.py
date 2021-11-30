import plotly
import chart_studio.plotly as py
import plotly.graph_objects as go
from plotly.offline import plot

import pandas as pd

mapbox_access_token = 'pk.eyJ1IjoiZWJ0ZXNhbWhhcXVlIiwiYSI6ImNrdzhlcWwyN2ZvdjMycHBnanIwOGpncGkifQ.6cEyYNwDA9NeT01C_OrEow'

df = pd.read_csv('https://raw.githubusercontent.com/ebtesam25/waterwaze/main/dashboard/extendedreadings.csv?token=AGHHPHPMVYLPFGDYGBPFGXDBV3EB2')
site_lat = df.lat
site_lon = df.lon
locations_name = df.id

data = [
    go.Scattermapbox(
        lat=site_lat,
        lon=site_lon,
        mode='markers',
        marker=dict(
            size=17,
            color='rgb(255, 0, 0)',
            opacity=0.7
        ),
        text=locations_name,
        hoverinfo='text'
    ),
    go.Scattermapbox(
        lat=site_lat,
        lon=site_lon,
        mode='markers',
        marker=dict(
            size=8,
            color='rgb(242, 177, 172)',
            opacity=0.7
        ),
        hoverinfo='none'
    )]


layout = go.Layout(
    title='Nuclear Waste Sites on Campus',
    autosize=True,
    hovermode='closest',
    showlegend=False,
    mapbox=dict(
        accesstoken=mapbox_access_token,
        bearing=0,
        center=dict(
            lat=38,
            lon=-94
        ),
        pitch=0,
        zoom=3,
        style='light'
    ),
)

fig = dict(data=data, layout=layout)




plotly.offline.plot(fig)
