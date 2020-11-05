from .client import run_query


def insert_member(id, real_name, tz):
    query = '''
        mutation insert_members($id: String, $real_name: String, $tz: String) {
            insert_members(objects: {id: $id, real_name: $real_name, tz: $tz}) {
                returning {
                    id
                }
            }
        }
    '''
    variables = {
        'id': id,
        'real_name': real_name,
        'tz': tz
    }
    response = run_query(query, variables)
    inserted_details = response.get(
        'insert_members', {}).get('returning', [])
    if len(inserted_details) != 1:
        raise RuntimeError('query failed')
    return inserted_details[0]


def insert_member_activity(member_id, start_time, end_time):
    query = '''
        mutation insert_members_activity_periods($member_id: String, $start_time: String, $end_time: String) {
            insert_members_activity_periods(objects: {member_id: $member_id, start_time: $start_time, end_time: $end_time}) {
                returning {
                    id
                }
            }
        }
    '''
    variables = {
        'member_id': member_id,
        'start_time': start_time,
        'end_time': end_time
    }
    response = run_query(query, variables)
    inserted_details = response.get(
        'insert_members_activity_periods', {}).get('returning', [])
    if len(inserted_details) != 1:
        raise RuntimeError('query failed')
    return inserted_details[0]


def get_member_details(id):
    query = '''
        query members($id: String) {
            members(where: {id: {_eq: $id}}) {
                id
                real_name
                tz
                activity_periods {
                    start_time
                    end_time
                    member_id
                }
            }
        }
    '''
    variables = {
        "id": id
    }
    response = run_query(query, variables)
    print(response)
    return response