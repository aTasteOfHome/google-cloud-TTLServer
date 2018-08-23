# google-cloud-TTLServer
Automatically deletes marked data in Google datastore/firestore after a  specified delay.

## App Engine
Firewall setup
- default deny all connections
- Allow connections from cloudfunctions (somehow? is it even a fixed IP?)

Architecture
- scheduled run every hour that recursively goes through database and deletes every expired document / entity

##Cloud Functions
- Does not have guaranteed delivery for cloud firestore triggers; tabling for now