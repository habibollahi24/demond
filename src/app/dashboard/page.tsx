import getCurrentUser from '@/helper/getCurrentUser';

import React from 'react';

export default async function DashboardPage() {
  const { user } = await getCurrentUser();

  return (
    <div>
      <div>
        UserInfo - {user?.cell} / {user?.phone} / {user?.mood} /{' '}
        {user?.moodIcon}
      </div>
      {/* <UserInfo /> */}
    </div>
  );
}
